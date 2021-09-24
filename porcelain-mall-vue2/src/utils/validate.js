/**
 * 验证文件
 */


/**
 * 验证是否是外部链接
 * @param {*} path 
 * @returns 
 */
export function isExternal(path){
    return /^(https?:|mailto:|tel:)/.test(path)
}
/**
 * 验证用户名
 * @param {用户名} userName 
 * @returns 
 */
export function validateUsername(userName){
    const valid_map=['admin','editor']
    return valid_map.indexOf(userName.trim())>=0
}

