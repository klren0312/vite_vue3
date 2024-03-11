import { get } from '/@/utils/request'
import type { TestArrWrap } from './models/test.model'
export function GetApi() {
  return get<TestArrWrap>('https://cnodejs.org/api/v1/topics')
}
