// 发送ajax请求的
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqLogOut,
  reqUserInfo,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api'
import {
  RECEIVE_ADDRESS,
  REACT_CATEGORYS,
  REACT_SHOPS,
  RECEIVE_USER,
  REACT_USER,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  RECEIVE_GOODS
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
  },
 // 保存user的action
  saveUser ({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  // 获取当前用户信息的异步action
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }


  },
  //退出登录
  async logout ({commit}, user) {
    const result = await reqLogOut()
    if (result.code === 0) {
      commit(REACT_USER)
    }
  },

  //异步获取商家信息
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
     
      commit(RECEIVE_INFO, {info})
    }
  },
  //异步获取商家评价信息
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  async getShopGoods ({commit}) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },
}
