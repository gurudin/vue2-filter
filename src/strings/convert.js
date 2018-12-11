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
  },
  /**
   * 首字母小写
   *
   * @param {string} value 转换字符串
   *
   * @return {string}
   */
  toLcfirst: function(value) {
    return value.substr(0, 1).toLowerCase() + value.substr(1, value.length);
  },
  /**
   * 格式化货币
   * 
   * @param {string|number} value 
   * @param {string} symbol 货币符号 default($)
   * @param {number} decimalDigits 小数位数
   * @param {string} symbolPosition 位置(first|last)
   *
   * @return {string}
   */
  currency: function (value, symbol = "$", decimalDigits = 0, symbolPosition = 'first') {
    var format = Number(value).toLocaleString('en-US');
    if (decimalDigits != 0) {
      format = format.toString() + '.';
      for (let i = 0; i < decimalDigits; i++) {
        format += '0';
      }
    }

    return symbolPosition == 'first' ? symbol + format : format + ' ' + symbol;
  }
};