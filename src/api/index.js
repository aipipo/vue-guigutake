import ajax from './ajax'

const BASE = '/api'
// 获取当前地址的经纬度
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)
// 获取商品分类
export const reqFoodCategorys = () => ajax(BASE + '/index_category')
// 获取店铺信息
export const reqShops = ({longitude, latitude}) => ajax(BASE + '/shops', {latitude, longitude})
// 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE + '/sendcode', {phone})
//手机号验证登录
export const reqSmsLogin = (phone,code) => ajax(BASE + '/login_sms', {phone,code}, 'POST')
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')
//退出登录
export const reqLogOut = () => ajax(BASE + '/logout')
//获取当前的user
export const reqUserInfo = () => ajax(BASE + 'userinfo')

