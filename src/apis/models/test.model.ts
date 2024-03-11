export interface TestArr {
  id: string
  author_id: string
  tab: string
  content: string
  title: string
  last_reply_at: string
  good: string
  top: string
  reply_count: string
  visit_count: string
  create_at: string
  author: {
    loginname: string
    avatar_url: string
  }
}

export interface TestArrWrap {
  message: string
  data: TestArr[]
}
