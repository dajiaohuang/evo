import { buildEvidenceIssueUrl } from '../../services/publication'
import { useI18n } from '../../i18n'

interface Props {
  entityId?: string
  claimId?: string
  compact?: boolean
}

export function EvidenceIssueLink({ entityId, claimId, compact = false }: Props) {
  const { t } = useI18n()
  return <a
    className={`evidence-issue-link${compact ? ' evidence-issue-link--compact' : ''}`}
    href={buildEvidenceIssueUrl({ entityId, claimId })}
    target="_blank"
    rel="noreferrer"
  >{t('Report an evidence issue')} ↗</a>
}
