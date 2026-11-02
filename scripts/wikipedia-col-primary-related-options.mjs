export function primaryRelatedOptions(rows, usable) {
  return rows.filter(row => usable(row.target_url, row.target_item)).map(row => {
    const relations = JSON.parse(row.relations)
    if (relations.includes('changed-item-exact-name')) return {
      item: row.target_item,
      parentNames: [`页面的 Wikidata 条目已变化；新条目学名与节点一致，分类身份待核对 / The page's Wikidata item changed; the new scientific name matches the node, identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('gbif-exact-peer')) return {
      item: row.target_item,
      parentNames: [`原名称重定向到物种树的另一节点；GBIF 名称匹配指向同一接受分类，分类身份待核对 / Original name redirects to another tree node; GBIF name matches share an accepted taxon, identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('geological-formation-redirect')) return {
      item: row.target_item,
      parentNames: [`该名称重定向到地质地层页面，并非分类单独条目 / This name redirects to a geological formation page, not a separate taxon article: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('scientific-publication-redirect')) return {
      item: row.target_item,
      parentNames: [`该名称重定向到科学文献页面，并非分类单独条目 / This name redirects to a scientific publication page, not a separate taxon article: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('same-epithet-other-genus')) return {
      item: row.target_item,
      parentNames: [`原名称重定向到另一个属的同种加词条目；分类身份待核对 / Original name redirects to a species with the same epithet in another genus; taxonomic identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('wikidata-genus-synonym-peer')) return {
      item: row.target_item,
      parentNames: [`原物种名称重定向到另一属的页面；Wikidata 记录两个属的异名关系，物种身份待核对 / The species name redirects to a different genus; Wikidata records a genus synonym relationship and the species identity is unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('tree-ancestor-page')) return {
      item: row.target_item,
      parentNames: [`此链接对应物种树中的上级分类，并非当前节点的独立页面 / This link is an ancestor taxon in the tree, not a separate article for the current node: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('tree-descendant-page')) return {
      item: row.target_item,
      parentNames: [`此链接对应物种树中的下级分类，并非当前节点的独立页面 / This link is a descendant taxon in the tree, not a separate article for the current node: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('wikidata-direct-child-page')) return {
      item: row.target_item,
      parentNames: [`Wikidata 将链接目标列为当前分类的下级；此链接不是当前节点的独立页面 / Wikidata lists the linked target as a child of this taxon; this is not a separate article for the current node: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('wikidata-direct-parent-page')) return {
      item: row.target_item,
      parentNames: [`Wikidata 将链接目标列为当前分类的上级；此链接不是当前节点的独立页面 / Wikidata lists the linked target as a parent of this taxon; this is not a separate article for the current node: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('same-ancestor-different-rank')) return {
      item: row.target_item,
      parentNames: [`原名称重定向到共同上级下不同等级的相近名称；分类身份待核对 / Original name redirects to a similar name at a different rank under a shared ancestor; taxonomic identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('tree-peer-redirect')) return {
      item: row.target_item,
      parentNames: [`原名称重定向到物种树中的另一个同级节点；分类身份待核对 / Original name redirects to a different sibling node in the tree; taxonomic identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('same-name-family-peer')) return {
      item: row.target_item,
      parentNames: [`页面对应同科、同名、同等级的另一个树节点；分类身份待核对 / This page identifies another tree node with the same name and rank in the same family; taxonomic identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('source-synonym-hybrid-variant')) return {
      item: row.target_item,
      parentNames: [`名录异名与页面名称仅在杂交符号上不同；分类身份待核对 / The catalogue synonym differs from the page name in hybrid notation; taxonomic identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('same-superfamily-other-node')) return {
      item: row.target_item,
      parentNames: [`原名称重定向到同一超科中另一个属的物种节点；分类身份待核对 / Original name redirects to a species node in another genus of the same superfamily; taxonomic identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('same-author-gbif-peer')) return {
      item: row.target_item,
      parentNames: [`作者相同，GBIF 对两种名称的匹配指向同一有效记录（含模糊匹配）；本地树列为不同节点，身份待核对 / The authors match and GBIF matches both names to one accepted record, including a fuzzy match; the local tree lists different nodes and identity is unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('same-name-rank-col-conflict')) return {
      item: row.target_item,
      parentNames: [`页面的学名和等级与当前节点相符，但目录编号指向树中的上下级节点；分类身份待核对 / The page's scientific name and rank match, but its catalogue identifier points to a parent or child node in the tree; taxonomic identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('name-parent-unverified')) return {
      item: row.target_item,
      parentNames: [`学名、上级分类和等级相符；分类身份待核对 / Scientific name, parent and rank match; taxonomic identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('same-parent-rank-alternate')) return {
      item: row.target_item,
      parentNames: [`同上级、同等级的相近名称；分类身份待核对 / Similar name with the same parent and rank; taxonomic identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('same-parent-rank-redirect')) return {
      item: row.target_item,
      parentNames: [`原名称重定向到同上级、同等级的不同名称；分类身份待核对 / Original name redirects to a different name with the same parent and rank; taxonomic identity unverified: ${row.target_name}`],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('published-species-group')) return {
      item: row.target_item,
      parentNames: [`相关物种组页面，并非该物种专页 / Related species-group page, not a species article: ${row.target_name}`,
        '分类身份待核对 / Taxonomic identity unverified'],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('published-subspecies-treatment')) return {
      item: row.target_item,
      parentNames: [`文献将此名称视为相关物种的亚种；链接为另一个树节点的页面 / A published treatment places this name as a subspecies of a related species; the link is a different tree node: ${row.target_name}`,
        '分类观点不同，身份待核对 / Taxonomic treatments differ; identity unverified'],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    if (relations.includes('published-synonym-split')) return {
      item: row.target_item,
      parentNames: [`历史异名关联的页面属于另一树节点，分类观点不同 / Historical synonym links to a different tree node; taxonomic treatments differ: ${row.target_name}`,
        '分类身份待核对 / Taxonomic identity unverified'],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
    let relation
    if (relations.some(value => value.endsWith('-child'))) relation = '下级分类 / descendant taxon'
    else if (relations.some(value => value.endsWith('-parent'))) relation = '上级分类 / ancestor taxon'
    else relation = '异名或基名关系 / synonym or basionym relationship'
    return {
      item: row.target_item,
      parentNames: [`原页面跳转到关联分类（${relation}）：${row.target_name} / Original page redirects to a related taxon: ${row.target_name}`,
        '分类身份待核对 / Taxonomic identity unverified'],
      ranks: [], url: row.target_url, abstracts: [], primaryRelatedCandidate: true,
    }
  })
}

export function nominateSubgenusParentOptions(rows, usable) {
  return rows.filter(row => usable(row.url, row.item)).map(row => ({
    item: row.item,
    parentNames: [`上级属条目，链接并非亚属专页 / Parent genus article; this link is not a subgenus article: ${row.parent_name}`],
    ranks: [], url: row.url, abstracts: [], primaryRelatedCandidate: true,
  }))
}

export function subgenusSameFamilyGenusOptions(rows, usable) {
  return rows.filter(row => usable(row.url, row.item)).map(row => ({
    item: row.item,
    parentNames: [`亚属名称对应同科另一属级节点，分类关系待核对 / Subgenus name points to a genus in the same family, a different tree node; relationship unverified: ${row.target_name} (${row.family_name})`],
    ranks: [], url: row.url, abstracts: [], primaryRelatedCandidate: true,
  }))
}

export function subgenusFamilyUnidentifiedGenusOptions(rows, usable) {
  return rows.filter(row => usable(row.url, row.item)).map(row => ({
    item: row.item,
    parentNames: [`亚属名称页面指向同科属级条目，分类身份未确认 / Subgenus-name page points to a genus article in the same family; taxonomic identity unverified: ${row.target_name} (${row.family_name})`],
    ranks: [], url: row.url, abstracts: [], primaryRelatedCandidate: true,
  }))
}

export function qualifiedUnkeyedSpeciesOptions(rows, usable) {
  return rows.filter(row => usable(row.url)).map(row => ({
    item: `Wikipedia:${row.locale}:${row.title}`,
    parentNames: [row.evidence, '无 Wikidata 条目编号，分类身份待核对 / No Wikidata item; taxonomic identity unverified'],
    ranks: [], url: row.url, abstracts: [], primaryRelatedCandidate: true,
  }))
}

export function ncbiHigherSynonymPeerOptions(rows, usable) {
  return rows.filter(row => usable(row.url, row.item)).map(row => ({
    item: row.item,
    parentNames: [`NCBI 将名称列为异名；目标是另一树节点，分类关系待核对 / NCBI lists a synonym; target is a different tree node and relationship is unverified: ${row.target_name} (${row.common_name})`],
    ranks: [], url: row.url, abstracts: [], primaryRelatedCandidate: true,
  }))
}

export function registryAbbrevPeerOptions(rows, usable) {
  return rows.filter(row => usable(row.url, row.item)).map(row => ({
    item: row.item,
    parentNames: [`名录异名页面对应另一树节点，作者一致，分类关系待核对 / Catalog synonym page identifies a different tree node; authorship matches, relationship unverified: ${row.target_name} (${row.common_name})`],
    ranks: [], url: row.url, abstracts: [], primaryRelatedCandidate: true,
  }))
}

// Preserve the relationship warning when another candidate uses the same URL.
export function prioritizePrimaryRelated(options) {
  return [...options.filter(option => option?.primaryRelatedCandidate), ...options.filter(option => !option?.primaryRelatedCandidate)]
}

export function synonymTitleRelatedOptions(rows, usable) {
  return rows.filter(row => usable(row.url, row.item)).map(row => ({
    item: row.item,
    parentNames: [`名录异名 ${row.synonym_name} 的标题跳转到另一属的物种 ${row.target_name}，分类关系待核对 / Catalog synonym title redirects to a species in another genus; relationship unverified: ${row.target_name}`],
    ranks: [], url: row.url, abstracts: [], primaryRelatedCandidate: true,
  }))
}
