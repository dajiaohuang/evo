from pathlib import Path
import json

p = Path('scripts/author-amolops-primary-readers.mjs')
s = p.read_text(encoding='utf-8')
start = s.index("  { colId: '66DZS'")
end = s.index("  { colId: 'LBHR3'", start)
part = s[start:end]
part = part.replace("readScope: 'Abstract, introduction, methods, extended diagnosis, distribution and taxonomic discussion; no figures reproduced', sections:", "readScope: 'Introduction sec3; methods sec4; extended diagnosis sec8; distribution sec9; analysis sec10; discussion sec11; Table 2 T12040475; no figures reproduced; no independent sequence reanalysis', sectionLocators: ['sec10 Analysis and sec11 Discussion: type/topotype comparison and synonymy', 'sec8 Extended diagnosis and Table 2 T12040475: pooled adult dimensions and variable diagnostic characters', 'sec9 Distribution and sec4 methods: named records and nine Chinese specimens', 'Table 2 T12040475: four specimen groups, sex-specific sample counts and SVL rows', 'sec8 Extended diagnosis and sec11 Discussion: re-examined teeth, gular pouches and glandular folds', 'sec4 methods and sec10 Analysis: 16S sequence lengths, pairwise distances and tree support'], sections:")
extra = [
    ['morphology', 'Separate specimen groups and sexes', '分别记录标本组与性别', 'Table 2 separates A. minutus types (eight males, five females), its topotypes (eight males, seven females), A. ottorum types (two females), and the Chinese sample (six males, three females). Their snout–vent lengths are respectively 29.7–36.4 and 38.5–50.2 mm; 30.8–34.0 and 42.5–47.5 mm; 47.5–48.2 mm for the two females; and 34.6–38.3 and 46.7–51.1 mm. The broader revised diagnostic range pools these groups. It does not describe the extrema of one population or a tested difference among populations.', '表 2 分开列出 A. minutus 模式标本（8 雄、5 雌）、模式地点标本（8 雄、7 雌）、A. ottorum 模式标本（2 雌）与中国样本（6 雄、3 雌）。相应吻肛长依次为雄性 29.7–36.4、雌性 38.5–50.2 毫米；雄性 30.8–34.0、雌性 42.5–47.5 毫米；两只雌性 47.5–48.2 毫米；中国雄性 34.6–38.3、雌性 46.7–51.1 毫米。修订鉴别范围汇总了这些组别，不能解释为单一种群的极值，也没有据此检验种群之间的差异。'],
    ['morphology', 'Corrections after type re-examination', '重新检查模式标本后的修正', 'The authors reported absent or weak vomerine teeth and no male gular pouches after re-examining material, in contrast to the strongly developed teeth and paired pouches in the 2007 description. The expanded diagnosis distinguishes absent true dorsolateral folds from distinct dorsolateral glandular folds. These wording differences matter for identification. Absence of a vocal sac does not demonstrate that frogs are silent, and the paper does not establish a species-wide call repertoire.', '作者重新检查材料后报告犁骨齿缺失或较弱，雄性没有喉囊；这与 2007 年描述中的发达犁骨齿及成对喉囊不同。扩展鉴别描述同时区分了真正背侧皮褶缺失与明显的背侧腺褶。鉴定时需要保留这些措辞的区别。没有声囊不能证明蛙不会鸣叫，本文也没有确立全物种鸣声类型。'],
    ['evolution', 'What the short mitochondrial marker supports', '短线粒体标记能够支持的范围', 'New 16S sequences were approximately 850 or 570 base pairs long. The analysis reported 0.7% divergence between A. minutus topotypes and A. ottorum and 0.6% between Chinese specimens and the topotypes, alongside reported Bayesian posterior support of 1 and ultrafast bootstrap support of 96 for the relevant grouping. These results contribute to the morphological and taxonomic argument. They are not a nuclear or genome-wide assessment, a universal divergence threshold, or a direct measurement of contemporary gene flow.', '新获得的 16S 序列长约 850 或 570 个碱基对。分析报告 A. minutus 模式地点标本与 A. ottorum 之间差异为 0.7%，中国标本与模式地点标本之间为 0.6%；相关分组的贝叶斯后验支持值为 1、超快速自举支持值为 96。这些结果参与形态与分类学综合论证，不能替代核基因或全基因组评估，也不是普遍差异阈值或对当代基因流的直接测量。']
]
old = "\n  ] },\n"
assert old in part and 'Separate specimen groups and sexes' not in part
part = part.replace(old, ',\n' + ',\n'.join('    ' + json.dumps(row, ensure_ascii=False) for row in extra) + old)
s = s[:start] + part + s[end:]
p.write_text(s, encoding='utf-8')
ledger = {'pmc': 'PMC11450383', 'doi': '10.3897/bdj.12.e129214', 'license': 'CC BY 4.0', 'colId': '66DZS', 'sourceConcept': 'Amolops minutus; Amolops ottorum treated as junior synonym in 2024', 'readScope': 'Introduction sec3, methods sec4, diagnosis sec8, distribution sec9, analysis sec10, discussion sec11; Table 2 T12040475', 'limits': ['Sex and specimen-group denominators retained; pooled ranges are not population extrema.', '2007 teeth and gular-pouch diagnosis revised in 2024; absent true folds and present glandular folds distinguished.', '16S only; no genome-wide identity, universal threshold or direct gene-flow inference.', 'Reserve elevation span is not an individual or species elevation range.', 'No new habitat, tadpole or species-wide acoustic claims; no figures reproduced.'], 'biologicalReaderComplete': False, 'fullArticleRead': False}
Path('docs/amphibia-content/amolops-minutus-revision-source-limits.json').write_text(json.dumps(ledger, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
# Record the actually reread corpus article separately from the retained earlier source snapshot.
manifest_path = Path('data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC11450383/manifest.json')
manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
manifest['readScopes'] = [x for x in manifest.get('readScopes', []) if x.get('sourceKey') != 'liu-2024-minutus'] + [{'colId': '66DZS', 'sourceKey': 'liu-2024-minutus', 'readScope': ledger['readScope']}]
manifest.update(articleRead=True, licenseVerified=True, license='CC BY 4.0', fullArticleRead=False, biologicalReaderComplete=False)
manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
print('Batch 181: enriched existing study with three sections and six locators; corpus reread recorded.')
