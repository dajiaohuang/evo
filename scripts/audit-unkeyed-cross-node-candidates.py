import collections
import gzip
import hashlib
import json
import sqlite3
import sys
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8/published-data-reviewed-20261031')
manifest = json.loads((root / 'manifest.json').read_bytes())
assert manifest['contentMode'] == 'links-only'
audit = sqlite3.connect('file:C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite?mode=ro', uri=True)
inventory = sqlite3.connect('file:.git/evo-wikipedia-col26-8/inventory.sqlite?mode=ro', uri=True)
try:
    nodes = {row[0]: row[1:] for row in inventory.execute('SELECT id,name,rank,parent_id FROM nodes')}
    held = set(inventory.execute('SELECT node_id,url FROM candidate_identity_held_urls'))
    items = {}
    for url, item in audit.execute("SELECT url,actual_item FROM unkeyed_pages WHERE status IN ('available','snapshot-available') AND actual_item IS NOT NULL"):
        items[url] = item
    matched = collections.defaultdict(set)
    matched_col_id = collections.defaultdict(set)
    candidates = []
    for shard in manifest['shards'].values():
        raw = (root / shard['path']).read_bytes()
        assert hashlib.sha256(raw).hexdigest() == shard['sha256']
        for node, entry in json.loads(gzip.decompress(raw))['entries'].items():
            item = entry.get('item') or ''
            if entry.get('status') in ('matched', 'abstract-pending') and item.startswith('https://www.wikidata.org/entity/'):
                matched[item.rsplit('/', 1)[-1]].add(node)
                if entry.get('matchKind') == 'matched-col-id':
                    matched_col_id[item.rsplit('/', 1)[-1]].add(node)
            if entry.get('status') == 'candidate':
                for option in entry.get('options', []):
                    item = items.get(option.get('url'))
                    if item:
                        candidates.append((node, item, option['url'], option.get('parentNames', [])))
    conflicts = [(node, item, url, sorted(matched[item] - {node}), labels) for node, item, url, labels in candidates if matched[item] - {node} and (node, url) not in held]
    categories = collections.Counter()
    nodes_by_category = collections.defaultdict(set)
    direct_parent_links = 0
    exact_id_same_name = []
    kingdom_classes = collections.Counter()
    kingdom_samples = collections.defaultdict(list)
    cross_kingdom = []
    cross_phylum = []
    cross_class = []
    cross_order = []
    remaining_exact = []
    inexact_cross_kingdom = []
    cross_name_kingdom = []
    cross_name_phylum = []
    cross_name_class = []
    cross_name_order = []
    def ancestor(ident, rank):
        seen = set()
        while ident and ident not in seen:
            seen.add(ident)
            row = nodes.get(ident)
            if not row:
                break
            if row[1] == rank:
                return (ident, row[0])
            ident = row[2]
        return None
    def kingdom(ident):
        return ancestor(ident, 'kingdom')
    samples = {}
    for node, item, url, others, labels in conflicts:
        source = nodes.get(node)
        if not source:
            category = 'missing-source'
        else:
            targets = [nodes[other] for other in others if other in nodes]
            if not targets:
                category = 'missing-target'
            elif any(source[0] == target[0] and source[1] == target[1] for target in targets):
                category = 'same-name-same-rank'
            elif any(source[1] == target[1] for target in targets):
                category = 'different-name-same-rank'
            else:
                category = 'different-rank'
        categories[category] += 1
        if category == 'same-name-same-rank':
            exact_others = [other for other in others if other in matched_col_id[item] and nodes.get(other, (None, None))[0:2] == source[0:2]]
            if exact_others:
                exact_id_same_name.append([node, item, url, exact_others])
                source_kingdom = kingdom(node)
                target_kingdoms = [kingdom(other) for other in exact_others]
                if source_kingdom is None or any(value is None for value in target_kingdoms):
                    kind = 'unknown-kingdom'
                elif all(value[0] != source_kingdom[0] for value in target_kingdoms):
                    kind = 'different-kingdom'
                    cross_kingdom.append({'node': node, 'item': item, 'url': url, 'others': exact_others, 'sourceKingdom': source_kingdom, 'targetKingdoms': target_kingdoms})
                else:
                    kind = 'same-kingdom'
                    source_phylum = ancestor(node, 'phylum')
                    target_phyla = [ancestor(other, 'phylum') for other in exact_others]
                    if source_phylum and all(value and value[0] != source_phylum[0] for value in target_phyla):
                        cross_phylum.append({'node': node, 'item': item, 'url': url, 'others': exact_others, 'sourcePhylum': source_phylum, 'targetPhyla': target_phyla})
                    elif source_phylum and all(value and value[0] == source_phylum[0] for value in target_phyla):
                        source_class = ancestor(node, 'class')
                        target_classes = [ancestor(other, 'class') for other in exact_others]
                        if source_class and all(value and value[0] != source_class[0] for value in target_classes):
                            cross_class.append({'node': node, 'item': item, 'url': url, 'others': exact_others, 'sourceClass': source_class, 'targetClasses': target_classes})
                        elif source_class and all(value and value[0] == source_class[0] for value in target_classes):
                            source_order = ancestor(node, 'order')
                            target_orders = [ancestor(other, 'order') for other in exact_others]
                            if source_order and all(value and value[0] != source_order[0] for value in target_orders):
                                cross_order.append({'node': node, 'item': item, 'url': url, 'others': exact_others, 'sourceOrder': source_order, 'targetOrders': target_orders})
                            else:
                                remaining_exact.append({'node': node, 'item': item, 'url': url, 'others': exact_others, 'sourceOrder': source_order, 'targetOrders': target_orders, 'sourceFamily': ancestor(node, 'family'), 'targetFamilies': [ancestor(other, 'family') for other in exact_others]})
                        else:
                            remaining_exact.append({'node': node, 'item': item, 'url': url, 'others': exact_others, 'sourceClass': source_class, 'targetClasses': target_classes})
                kingdom_classes[kind] += 1
                if len(kingdom_samples[kind]) < 5:
                    kingdom_samples[kind].append([node, item, url, source_kingdom, target_kingdoms])
            else:
                same_name_others = [other for other in others if nodes.get(other, (None, None))[0:2] == source[0:2]]
                source_kingdom = kingdom(node)
                target_kingdoms = [kingdom(other) for other in same_name_others]
                if source_kingdom and same_name_others and all(value and value[0] != source_kingdom[0] for value in target_kingdoms):
                    inexact_cross_kingdom.append({'node': node, 'item': item, 'url': url, 'others': same_name_others, 'sourceKingdom': source_kingdom, 'targetKingdoms': target_kingdoms})
        elif category == 'different-name-same-rank':
            exact_others = [other for other in others if other in matched_col_id[item] and nodes.get(other, (None, None))[1] == source[1]]
            source_kingdom = kingdom(node)
            target_kingdoms = [kingdom(other) for other in exact_others]
            if source_kingdom and exact_others and all(value and value[0] != source_kingdom[0] for value in target_kingdoms):
                cross_name_kingdom.append({'node': node, 'item': item, 'url': url, 'others': exact_others, 'sourceKingdom': source_kingdom, 'targetKingdoms': target_kingdoms})
            elif source_kingdom and exact_others and all(value and value[0] == source_kingdom[0] for value in target_kingdoms):
                source_phylum = ancestor(node, 'phylum')
                target_phyla = [ancestor(other, 'phylum') for other in exact_others]
                if source_phylum and all(value and value[0] != source_phylum[0] for value in target_phyla):
                    cross_name_phylum.append({'node': node, 'item': item, 'url': url, 'others': exact_others, 'sourcePhylum': source_phylum, 'targetPhyla': target_phyla})
                elif source_phylum and all(value and value[0] == source_phylum[0] for value in target_phyla):
                    source_class = ancestor(node, 'class')
                    target_classes = [ancestor(other, 'class') for other in exact_others]
                    if source_class and all(value and value[0] != source_class[0] for value in target_classes):
                        cross_name_class.append({'node': node, 'item': item, 'url': url, 'others': exact_others, 'sourceClass': source_class, 'targetClasses': target_classes})
                    elif source_class and all(value and value[0] == source_class[0] for value in target_classes):
                        source_order = ancestor(node, 'order')
                        target_orders = [ancestor(other, 'order') for other in exact_others]
                        if source_order and all(value and value[0] != source_order[0] for value in target_orders):
                            cross_name_order.append({'node': node, 'item': item, 'url': url, 'others': exact_others, 'sourceOrder': source_order, 'targetOrders': target_orders})
        nodes_by_category[category].add(node)
        if source and any(target and (target[2] == node or source[2] == other) for other in others for target in [nodes.get(other)]):
            direct_parent_links += 1
        samples.setdefault(category, []).append([node, source, item, url, [(other, nodes.get(other)) for other in others], labels])
    if '--evidence' in sys.argv:
        evidence = {'manifestSha256': hashlib.sha256((root / 'manifest.json').read_bytes()).hexdigest(), 'rows': cross_kingdom}
        output = root.parent / 'cross-kingdom-unkeyed-candidates-evidence.json'
        with output.open('x', encoding='utf-8') as handle:
            json.dump(evidence, handle, ensure_ascii=True, separators=(',', ':'))
    if '--phylum-evidence' in sys.argv:
        evidence = {'manifestSha256': hashlib.sha256((root / 'manifest.json').read_bytes()).hexdigest(), 'rows': cross_phylum}
        output = root.parent / 'cross-phylum-unkeyed-candidates-evidence.json'
        with output.open('x', encoding='utf-8') as handle:
            json.dump(evidence, handle, ensure_ascii=True, separators=(',', ':'))
    if '--class-evidence' in sys.argv:
        evidence = {'manifestSha256': hashlib.sha256((root / 'manifest.json').read_bytes()).hexdigest(), 'rows': cross_class}
        output = root.parent / 'cross-class-unkeyed-candidates-evidence.json'
        with output.open('x', encoding='utf-8') as handle:
            json.dump(evidence, handle, ensure_ascii=True, separators=(',', ':'))
    if '--order-evidence' in sys.argv:
        evidence = {'manifestSha256': hashlib.sha256((root / 'manifest.json').read_bytes()).hexdigest(), 'rows': cross_order}
        output = root.parent / 'cross-order-unkeyed-candidates-evidence.json'
        with output.open('x', encoding='utf-8') as handle:
            json.dump(evidence, handle, ensure_ascii=True, separators=(',', ':'))
    if '--remaining-evidence' in sys.argv:
        evidence = {'manifestSha256': hashlib.sha256((root / 'manifest.json').read_bytes()).hexdigest(), 'rows': remaining_exact}
        output = root.parent / 'cross-remaining-unkeyed-candidates-evidence.json'
        with output.open('x', encoding='utf-8') as handle:
            json.dump(evidence, handle, ensure_ascii=True, separators=(',', ':'))
    if '--inexact-evidence' in sys.argv:
        evidence = {'manifestSha256': hashlib.sha256((root / 'manifest.json').read_bytes()).hexdigest(), 'rows': inexact_cross_kingdom}
        output = root.parent / 'cross-inexact-unkeyed-candidates-evidence.json'
        with output.open('x', encoding='utf-8') as handle:
            json.dump(evidence, handle, ensure_ascii=True, separators=(',', ':'))
    if '--name-kingdom-evidence' in sys.argv:
        evidence = {'manifestSha256': hashlib.sha256((root / 'manifest.json').read_bytes()).hexdigest(), 'rows': cross_name_kingdom}
        output = root.parent / 'cross-namekingdom-unkeyed-candidates-evidence.json'
        with output.open('x', encoding='utf-8') as handle:
            json.dump(evidence, handle, ensure_ascii=True, separators=(',', ':'))
    if '--name-phylum-evidence' in sys.argv:
        evidence = {'manifestSha256': hashlib.sha256((root / 'manifest.json').read_bytes()).hexdigest(), 'rows': cross_name_phylum}
        output = root.parent / 'cross-namephylum-unkeyed-candidates-evidence.json'
        with output.open('x', encoding='utf-8') as handle:
            json.dump(evidence, handle, ensure_ascii=True, separators=(',', ':'))
    if '--name-class-evidence' in sys.argv:
        evidence = {'manifestSha256': hashlib.sha256((root / 'manifest.json').read_bytes()).hexdigest(), 'rows': cross_name_class}
        output = root.parent / 'cross-nameclass-unkeyed-candidates-evidence.json'
        with output.open('x', encoding='utf-8') as handle:
            json.dump(evidence, handle, ensure_ascii=True, separators=(',', ':'))
    if '--name-order-evidence' in sys.argv:
        evidence = {'manifestSha256': hashlib.sha256((root / 'manifest.json').read_bytes()).hexdigest(), 'rows': cross_name_order}
        output = root.parent / 'cross-nameorder-unkeyed-candidates-evidence.json'
        with output.open('x', encoding='utf-8') as handle:
            json.dump(evidence, handle, ensure_ascii=True, separators=(',', ':'))
    print(json.dumps({'nodes': len({row[0] for row in conflicts}), 'links': len(conflicts), 'categories': categories, 'crossNameOrder': len(cross_name_order), 'crossNameOrderNodes': len({row['node'] for row in cross_name_order}), 'samples': cross_name_order[:3]}, ensure_ascii=True))
finally:
    audit.close()
    inventory.close()
