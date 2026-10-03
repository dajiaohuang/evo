import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const citation = { pmc: 'PMC12485483', year: 2025, readScope: 'Species ecology treatment in Ha Nam field-record study' }
prepareAmphibianResearchInput([
  { colId: '42X9S', name: 'Microhyla butleri', ...citation, sections: [
    ['ecology', 'Calling and larvae near temporary puddles', '临时水坑附近的鸣叫与幼体', 'The Ha Nam study found specimens on the ground near a small puddle between 20:15 and 20:45, in mixed secondary forest with small hardwood trees and shrubs. Males called at the site and tadpoles were detected in temporary puddles. These observations document local reproductive activity and larval occurrence, without establishing exclusive puddle breeding or a complete annual season.', '河南省研究于 20:15—20:45 在小型阔叶树与灌木组成的混合次生林中，于小水坑附近地面发现标本。地点有雄性鸣叫，临时水坑中检测到蝌蚪。这些观察记录当地繁殖活动与幼体出现，不能确立仅在水坑繁殖或完整年度繁殖季。']
  ] },
  { colId: '73H3C', name: 'Microhyla heymonsi', ...citation, sections: [
    ['ecology', 'Ground encounters beside puddles and streams', '水坑与溪流旁的地面发现', 'The Ha Nam account found specimens on the ground near small puddles or streams between 20:00 and 21:30, in mixed secondary forest. Calling males were recorded and tadpoles observed in temporary puddles. Adult streamside encounters are kept separate from the reported puddle larval records; the account does not establish larval development in the streams or physiological habitat requirements.', '河南省记述于 20:00—21:30 在混合次生林的小水坑或溪流旁地面发现标本，记录雄性鸣叫，并在临时水坑观察到蝌蚪。成体溪边发现与已报告水坑幼体记录分别保留，记述不能确立幼体在溪流发育或生理生境需求。']
  ] },
  { colId: '42XB2', name: 'Microhyla mukhlesuri', ...citation, sections: [
    ['ecology', 'A local puddle-associated reproductive record', '当地与水坑相关的繁殖记录', 'The Ha Nam study encountered specimens on the ground beside a small puddle between 20:30 and 21:00 in mixed secondary forest. Males called there, and tadpoles were detected in temporary puddles. These collection observations support the stated local association, without supplying egg counts, development duration or evidence that every population uses the same sites.', '河南省研究于 20:30—21:00 在混合次生林的小水坑旁地面发现标本，当地有雄性鸣叫，临时水坑中检测到蝌蚪。这些采集观察支持所述当地关联，未提供卵数、发育时长或所有种群利用相同地点的证据。']
  ] },
  { colId: '42XBL', name: 'Microhyla pulchra', ...citation, sections: [
    ['ecology', 'Adult and larval water-body records', '成体与幼体的水体记录', 'The Ha Nam account found specimens on the ground near small puddles or a pond between 20:00 and 21:30 in mixed secondary forest. Males were heard calling at the site; tadpoles were detected in temporary puddles. The adult pond-side record is not substituted for a demonstrated pond larval record, and the observations do not establish a full breeding calendar.', '河南省记述于 20:00—21:30 在混合次生林的小水坑或池塘旁地面发现标本。地点听到雄性鸣叫，临时水坑中检测到蝌蚪。成体池塘旁记录不替代已证明的池塘幼体记录，观察也不能确立完整繁殖日历。']
  ] }
])
