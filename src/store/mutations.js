// 更改state状态
import {
  REACT_CATEGORYS,
  REACT_SHOPS,
  RECEIVE_ADDRESS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [REACT_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [REACT_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}
