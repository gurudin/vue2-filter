/**
 * 转换
 *
 * @function toUpperCase 转换大写
 * @function toLowerCase 转换小写
 * @function toUcfirst 首字母大写
 */
export default {
  /**
   * 转换大写
   * 
   * @param {string} value 转换字符串
   * 
   * @return {string}
   */
  toUpperCase: function(value) {
    return value.toUpperCase();
  },
  /**
   * 转换小写
   * 
   * @param {string} value 转换字符串
   *
   * @return {string}
   */
  toLowerCase: function(value) {
    return value.toLowerCase();
  },
  /**
   * 首字母大写
   *
   * @param {string} value 转换字符串
   *
   * @return {string}
   */
  toUcfirst: function(value) {
    return value.substr(0, 1).toUpperCase() + value.substr(1, value.length);
  }
};