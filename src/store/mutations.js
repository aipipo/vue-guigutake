// 更改state状态
import {
  REACT_CATEGORYS,
  REACT_SHOPS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  REACT_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS
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
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  }
}
