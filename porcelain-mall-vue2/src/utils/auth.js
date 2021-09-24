import Cookies from 'js-cookie'
import Configs from '@/settings'
import { TokenKey } from '../settings'

const TokenKeyName = Configs.TokenKey

/**
 * 获取Token
 * @returns Token Key
 */
export function getToken() {
  return Cookies.get(TokenKeyName)
}
/**
 * 设置token
 * @param {token值} token
 * @param {记住我} rememberMe
 * @returns
 */
export function setToken(token, rememberMe) {
  if (rememberMe) {
    return Cookies.set(TokenKeyName, token, {
      expires: Configs.tokenCookieExpires,
    })
  } else {
    return Cookies.set(TokenKeyName, TokenKey)
  }
}
/**
 *
 * @returns 删除token
 */
export function removeToken() {
  return Cookies.remove(TokenKeyName)
}
