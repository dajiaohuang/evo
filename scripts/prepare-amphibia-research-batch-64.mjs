import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const citation = { pmc: 'PMC10311392', year: 2023, license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', readScope: 'Species Remarks paragraph in the Sekayu study; stream occurrence and substrates limited to the study area' }
prepareAmphibianResearchInput([
  { colId: '66XWK', name: 'Ansonia latiffi', ...citation, sections: [
    ['ecology', 'Stream banks and low vegetation at Sekayu', 'Sekayu 的溪岸及低矮植被', 'All individuals observed or collected in this account were along banks of small Peres River streams in the Sekayu recreational-forest study area. They occurred on rocks or sloping ground and sometimes on vegetation less than 1 m high. These are local substrate observations, without establishing absence from other habitats or a range-wide height preference.', '记述中所有观察或采集个体均位于 Sekayu 游憩林研究区域的 Peres 河小溪沿岸。个体出现于岩石、坡地，有时停栖于不足 1 米高的植被。这些是当地基质观察，不能确定其他生境缺失或整个分布区的高度偏好。']
  ] },
  { colId: '66Y8L', name: 'Ansonia lumut', ...citation, sections: [
    ['ecology', 'Stream substrates and pitfall captures', '溪流基质及陷阱采集', 'The Sekayu account reported frogs on moss-covered granite and low vegetation at steep stream edges, as well as captures in pitfall traps. Two Peres River specimens came from a small stream and a drift-fenced pitfall respectively. A Bubu River specimen was collected at the same locality as a cited earlier record. Trap capture records are kept distinct from directly observed resting substrates and do not themselves establish habitat preference.', 'Sekayu 记述报告蛙出现于覆苔花岗岩及陡峭溪岸低矮植被，并有陷阱采集。两份 Peres 河标本分别来自小溪及设导向围栏的落坑陷阱；另有 Bubu 河标本采于引用的此前记录同一地点。陷阱采集与直接观察的停栖基质分别保留，不能单独确定生境偏好。']
  ] },
  { colId: '66DZ3', name: 'Amolops gerutu', ...citation, sections: [
    ['ecology', 'Boulders beside torrential river sections', '急流河段旁的巨石', 'Within the Sekayu lowland-forest study, the authors reported this frog along torrential sections of the Peres and Bubu rivers. Frogs perched on stacked boulder surfaces beside streams and occasionally on nearby low vegetation. The account’s wording is limited here to those study rivers, rather than proof that no other population uses different settings.', '在 Sekayu 低地林研究内，作者于 Peres、Bubu 河急流段报告此蛙。蛙停栖于溪旁堆叠巨石表面，偶尔出现于邻近低矮植被。此处将记述措辞限定于这些研究河流，不作为其他种群不使用不同环境的证明。'],
    ['development', 'Tadpoles attached below the waterline', '水面以下附着的蝌蚪', 'The same account reported A. gerutu tadpoles clinging to boulders below the waterline. This documents a local larval attachment substrate, without supplying measured flow limits, diet, developmental duration or an experimentally tested attachment mechanism.', '同一记述报告 A. gerutu 蝌蚪附着于水面以下巨石。这记录当地幼体附着基质，未提供测量流速极限、食性、发育时长或经过实验测试的附着机制。']
  ] }
])
