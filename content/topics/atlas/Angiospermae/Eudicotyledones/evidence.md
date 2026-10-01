---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Eudicotyledones
    commonName: Eudicots
    commonNameZh: 真双子叶植物
    rank: class
    taxonId: ""
    firstAppearance: 125
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/Eudicotyledones
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: moore-2010-eudicot-plastids
      referenceLinks:
        - referenceId: moore-2010-eudicot-plastids
          relation: supports
          pages: 4623–4628
          quoteLocator: Figures 1–2; 83-gene phylogenetic analyses
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/Eudicotyledones
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Sun et al. 2011 DOI 10.1038/nature09811; Moore et al. 2010 DOI 10.1073/pnas.0907801107
      referenceLinks:
        - referenceId: sun-2011-leefructus
          relation: supports
          pages: 471:625–628
          figure: Figures 1–5
          quoteLocator: Abstract and Leefructus diagnosis
        - referenceId: moore-2010-eudicot-plastids
          relation: supports
          pages: 107:4623–4628
          figure: Figures 1–2
          quoteLocator: 83-gene phylogenetic analyses
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/Eudicotyledones
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Sun et al. 2011 DOI 10.1038/nature09811
      referenceLinks:
        - referenceId: sun-2011-leefructus
          relation: supports
          pages: 471:625–628
          figure: Figure 1
          quoteLocator: Locality, stratigraphic setting and radiometric dates
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/Eudicotyledones
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Sun et al. 2011 DOI 10.1038/nature09811
      referenceLinks:
        - referenceId: sun-2011-leefructus
          relation: supports
          pages: 471:625–628
          quoteLocator: Fossil description and systematic discussion
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/Eudicotyledones
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Sun et al. 2011 DOI 10.1038/nature09811
      referenceLinks:
        - referenceId: sun-2011-leefructus
          relation: supports
          pages: 471:625–628
          figure: Figures 1–5
          quoteLocator: Fossil description and comparative diagnosis
    - subject:
        kind: taxon
        path: content/topics/atlas/Angiospermae/Eudicotyledones
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: sun-2011-leefructus locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: sun-2011-leefructus
          pages: 471:625–628
          figure: Figures 1–5
          quoteLocator: Abstract; 122.6–125.8 Ma bed dates and Leefructus diagnosis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
    - markdown: evidence.md
      field: /records/claim-rationales.zh/3
    - markdown: evidence.md
      field: /records/claim-rationales.zh/4
    - markdown: evidence.md
      field: /records/claim-rationales.zh/5
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
    - markdown: evidence.md
      field: /records/claim-statements.zh/3
    - markdown: evidence.md
      field: /records/claim-statements.zh/4
    - markdown: evidence.md
      field: /records/claim-statements.zh/5
  ranges:
    - entityPath: content/topics/atlas/Angiospermae/Eudicotyledones
      rangeKind: global-composite
      taxonomicConcept: Eudicotyledones Leefructus-sample-to-living navigation anthology
      geographicScope: Daxinfangzi-bed Leefructus sample plus living eudicots
      olderMa: 125.8
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: high
      claimPaths:
        - content/topics/atlas/Angiospermae/Eudicotyledones/evidence.md#/records/claims/5
      referenceLocators:
        - referenceId: sun-2011-leefructus
          locator: 625–628; Abstract; Figures 1–5; Daxinfangzi bed dates 122.6–125.8 Ma and Leefructus diagnosis
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Eudicotyledones

## claims / statement

<!-- evo:text /records/claims/0/statement -->
An 83-plastid-gene analysis resolves several early eudicot branches in its sampled taxa; this organellar topology is not a global eudicot first appearance or a direct ancestor sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Large plastid character sampling supports the reported nodes, while taxon sampling and organellar inheritance bound broader evolutionary history.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Leefructus mirus is diagnosed as a basal eudicot from the Early Cretaceous Yixian Formation, while a separate 83-plastid-gene analysis resolves selected living early eudicot branches; neither result is a literal ancestor sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The fossil diagnosis and sampled organellar topology are independently documented, but their different evidence scopes do not fix a complete eudicot phylogeny or crown age.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The fossil locality represented in this profile is the Daxinfangzi bed of the Yixian Formation in northeastern China; one dated locality does not establish a eudicot origin centre or global distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary description provides the locality and dated bed envelope directly. The narrow claim makes no extrapolation from that locality to class-wide biogeography.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Leefructus preserves vegetative and reproductive plant material, supporting only a bounded primary-producer context for the sampled fossil; its habitat and any class-wide eudicot ecology remain unresolved.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The material establishes the identity and morphology of the sampled fossil but does not directly measure habitat, physiology or class-wide ecological roles.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Leefructus mirus from the Yixian Formation has deeply three-lobed leaves grouped at nodes and an axillary reproductive axis ending in five narrow, partly united carpels. These are features of the described fossil, not a universal eudicot body plan.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The named fossil and its diagnostic structures are directly described and illustrated, while extension to all eudicots would exceed the specimen and analysis scope.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
Eudicotyledones is displayed at 125.8–0 Ma only as a radiometrically bounded Leefructus-sample-to-living navigation anthology: the fossil supports basal-eudicot presence but does not establish the exact global FAD, crown divergence or continuous occupancy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
Sun et al. (2011) directly diagnose Leefructus and bound its fossil bed with multiple radiometric dates at 122.6–125.8 Ma. High confidence applies to that specimen and bed envelope plus living continuation, not an exact eudicot origin.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
大量质体性状支持所报告节点，但类群取样和细胞器遗传限制了更广的演化历史推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Sun 等（2011）直接鉴定 Leefructus，并用多组放射性测年把化石层限定为 122.6–125.8 Ma。高置信度仅适用于该标本、地层包络与现生延续，不代表精确真双子叶起源。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
Leefructus 的化石诊断与现生类群的质体系统树各自有直接证据，但二者证据范围不同，不能固定完整真双子叶系统树或冠群年龄。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
原始描述直接给出义县组大新房子层的地点与年代；本声明不把一个地点外推为真双子叶植物起源中心或全球分布。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
化石材料可支持所采样植物的初级生产者背景，却不能直接测量生境、生理或整个类群的生态角色，因此保留为低置信度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
具名化石及其诊断性营养和生殖结构有直接描述和图示；中生代单一标本不能代表全部真双子叶植物体制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
早白垩世义县组的 Leefructus mirus 被鉴定为基部真双子叶植物；另一项独立的 83 个质体基因分析解析了所选现生早分化真双子叶植物分支。两项结果都不等于实际的祖先序列。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本档案代表的化石产地是中国东北义县组的 Daxinfangzi 层位；一个已测年的地点不能确定真双子叶植物的起源中心或全球分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Leefructus 保存了植物营养与生殖材料，仅支持将所采样化石置于有限的初级生产者背景中；其生境及全纲层面的真双子叶植物生态仍未确定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
义县组的 Leefructus mirus 具有在节处成簇的深三裂叶，以及末端带有五枚狭长、部分联合心皮的腋生生殖轴。这些是所描述化石的特征，而非真双子叶植物的通用体制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
83 个质体基因的分析解析了取样类群中的若干早期真双子叶分支；这一细胞器拓扑不是全球真双子叶植物首现，也不是直接祖先序列。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
Eudicotyledones 的 125.8–0 Ma 仅作为“放射性测年限定的 Leefructus 样本—现生类群”导航汇编：该化石支持基部真双子叶植物存在，但不能确立精确全球首现、冠群分化或连续占据。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 125.8 Ma edge is the older limit of the dated 122.6–125.8 Ma fossil bed, not the global eudicot FAD or an exact crown divergence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Sun et al. diagnose Leefructus as a basal eudicot and report multiple radiometric dates bounding its bed at 122.6–125.8 Ma; 0 Ma denotes living eudicots.
<!-- /evo:text -->
