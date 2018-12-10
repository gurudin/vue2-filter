/**
 * 填充字符串
 * @function leftFill 左填充
 * @function rightFill 右填充
 */
export default {
  /**
   * 左填充
   * 
   * @param {number|string} value 原字符串
   * @param {number|string} filler 填充字符
   * @param {number} len 填充长度
   *
   * @return {string}
   */
  leftFill: function (value, filler = ' ', len = 0) {
    len = parseInt(len);
    if (!Number.isInteger(len)) {
      throw "The argument 'len' must be of numeric type";
    }
    value = value.toString();
    filler = filler.toString();

    if (len != 0) {
      if (value.length >= len) {
        return value;
      }
    } else {
      return filler + value;
    }

    let fillerLen = len - value.length;
    for (let i = 0; i < fillerLen; i++) {
      value = filler + value;
    }

    return value;
  },
  /**
   * 右填充
   * 
   * @param {number|string} value 原字符串
   * @param {number|string} filler 填充字符
   * @param {number} len 填充长度
   *
   * @return {string}
   */
  rightFill: function (value, filler = ' ', len = 0) {
    len = parseInt(len);
    if (!Number.isInteger(len)) {
      throw "The argument 'len' must be of numeric type";
    }
    value = value.toString();
    filler = filler.toString();

    if (len != 0) {
      if (value.length >= len) {
        return value;
      }
    } else {
      return value + filler;
    }

    let fillerLen = len - value.length;
    for (let i = 0; i < fillerLen; i++) {
      value = value + filler;
    }

    return value;
  }
};
