export type Scholar = {
  /**
   * UUID
   */
  id: string
  /**
   * タイトル
   */
  title: string
  /**
   * 著者名
   */
  author: string
  /**
   * 掲載誌
   */
  journal: string
  /**
   * 巻
   */
  volume: number | string
  /**
   * 号
   */
  number: number | string
  /**
   * ページ
   */
  pageRange: string
  /**
   * 出版日
   */
  publishedDate: string
  /**
   * 一言概要
   */
  briefDescription: string
  /**
   * PDF URL
   */
  pdfUrl: string
}
