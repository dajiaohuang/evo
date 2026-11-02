export function assertWithinLiveCeiling(after, through, ceiling) {
  if(!Number.isSafeInteger(after)||!Number.isSafeInteger(through)||after<0||through<after||through>ceiling) throw Error('Range must stay within the continuous page-scan checkpoint')
}

export function matchesIdentityReviewMode(page, redirects) {
  return Boolean(page.actual_item) && (redirects ? page.title !== page.target_title : page.title === page.target_title)
}

export function selectContiguousLivePages(db, locale, after, limit = 5000) {
  const ceiling=db.prepare('SELECT last_rowid FROM checkpoint WHERE kind=?').get(`unkeyed:${locale}`)?.last_rowid??0
  const pages=db.prepare("SELECT source_rowid,url,title,target_title,actual_item,checked_at FROM results WHERE kind='unkeyed' AND locale=? AND status='available' AND source_rowid>? AND source_rowid<=? ORDER BY source_rowid LIMIT ?").all(locale,after,ceiling,limit)
  return { ceiling, pages }
}
