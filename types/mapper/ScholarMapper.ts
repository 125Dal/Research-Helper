import { readScholarSummaryResponse } from '../dto/readScholarSummaryResponse'
import { Scholar } from '../entity/Scholar'

const dateFormat = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

export const ScholarMapper = (target: readScholarSummaryResponse): Scholar => {
  return {
    title: target.title,
    author: target.author.join(', '),
    journal: `『${target.journal}』`,
    volume: `第${target.volume}巻`,
    number: `第${target.number}号`,
    pageRange: `pp.${target.pageStart}-${target.pageEnd}`,
    publishedDate: `${dateFormat.format(target.publishedDate)} 出版`,
    briefDescription: target.briefDescription,
    pdfUrl: ''
  }
}
