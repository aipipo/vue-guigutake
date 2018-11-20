// 更改state状态
import {
  REACT_CATEGORYS,
  REACT_SHOPS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  REACT_USER
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
  },
  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },
  [REACT_USER] (state) {
    state.user = {}
  }
}
