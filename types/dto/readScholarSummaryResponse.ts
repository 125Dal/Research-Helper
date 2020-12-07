export type readScholarSummaryResponse = {
  id: string
  title: string
  author: string[]
  journal: string
  volume: number | string
  number: number | string
  pageStart: number
  pageEnd: number
  publishedDate: Date
  briefDescription: string
}
