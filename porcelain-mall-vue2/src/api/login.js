import request from '@/utils/request'

/**
 * 获取二维码图片
 * @returns 
 */
export function getCodeImg(){
    return request({
        url:'auth/code',
        method:'get'
    })
}