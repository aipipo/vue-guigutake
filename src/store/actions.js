// 发送ajax请求的
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'
import {
  RECEIVE_ADDRESS,
  REACT_CATEGORYS,
  REACT_SHOPS
} from './mutation-types'

export default {
  // 异步获取地址信息
  async getAddress ({commit, state}) {
    const {latitude, longitude} = state

    const result = await reqAddress(longitude, latitude)

    if (result.code === 0) { // 请求成功
      const address = result.data
      // commit 的第二个参数名字要和mutations的名字相同
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getCategorys ({commit}) {
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(REACT_CATEGORYS, {categorys})
    }
  },
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    if (result.code === 0) {}
    const shops = result.data
    commit(REACT_SHOPS, {shops})
  }

}
