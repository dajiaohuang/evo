import { pagesPreviewCopy } from '../../config/pagesPreview'
import { useI18n } from '../../i18n'
import '../catalogue/CatalogueTaxonPage.css'

export function PagesPreviewGate() {
  const { language } = useI18n()
  const copy = pagesPreviewCopy[language]
  return (
    <main className="catalogue-taxon-page catalogue-taxon-page--message" data-pages-preview-gate>
      <section>
        <span>{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <p>{copy.body}</p>
      </section>
    </main>
  )
}
