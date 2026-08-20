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
        <span className={['reviewed', 'reviewed-with-caveats'].includes(publication.reviewStatus) ? 'is-reviewed' : 'is-pending'}>{t(reviewStatusLabel(publication.reviewStatus))}</span>
        <span className="is-pending">{t('External expert review not performed')}</span>
      </div>
      {!compact && <p>{t(['reviewed', 'reviewed-with-caveats'].includes(publication.reviewStatus)
        ? 'The maintainer recorded a decision against an exact content digest; inspect review.json for caveats. ChatGPT assistance is a consistency aid, not peer review.'
        : 'Automated checks cover structure and linkage only. Maintainer review and external domain-expert review are separate and have not been implied.')}</p>}
      {showReportLink && (
        <a href={buildEvidenceIssueUrl({ entityId, claimId })} target="_blank" rel="noreferrer">
          {t('Report an evidence issue')} ↗
        </a>
      )}
    </aside>
  )
}
