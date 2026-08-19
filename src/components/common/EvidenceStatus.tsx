import type { PublicationStatus } from '../../services/publication'
import { buildEvidenceIssueUrl, reviewStatusLabel, scientificMaturityLabel } from '../../services/publication'
import { useI18n } from '../../i18n'

interface EvidenceStatusProps {
  publication: PublicationStatus
  entityId?: string
  claimId?: string
  compact?: boolean
  showReportLink?: boolean
}

export function EvidenceStatus({ publication, entityId, claimId, compact = false, showReportLink = true }: EvidenceStatusProps) {
  const { language, t } = useI18n()
  const packageTitle = language === 'zh' ? publication.titleZh : publication.title
  return (
    <aside className={`evidence-status evidence-status--${publication.scientificMaturity}${compact ? ' evidence-status--compact' : ''}`} aria-label={t('Content maturity and review status')}>
      <div>
        <span className="evidence-status__maturity">{t(scientificMaturityLabel(publication.scientificMaturity))}</span>
        <strong>{packageTitle}</strong>
      </div>
      <div className="evidence-status__checks">
        <span>{t(publication.automatedReviewStatus === 'passed' ? 'Automated data audit passed' : 'Automated data audit pending')}</span>
        <span className={publication.scientificReviewStatus === 'expert-reviewed' ? 'is-reviewed' : 'is-pending'}>{t(reviewStatusLabel(publication.scientificReviewStatus))}</span>
      </div>
      {!compact && <p>{t(publication.scientificReviewStatus === 'expert-reviewed'
        ? 'A named human domain reviewer has accepted this scope; inspect the review record for reservations.'
        : 'Automated checks cover structure and linkage only. They are not a substitute for human scientific review.')}</p>}
      {showReportLink && (
        <a href={buildEvidenceIssueUrl({ entityId, claimId })} target="_blank" rel="noreferrer">
          {t('Report an evidence issue')} ↗
        </a>
      )}
    </aside>
  )
}
