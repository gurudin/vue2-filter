export default {
  /**
   * 截断替换
   * 
   * @param {string} value
   * @param {number} length default(15)
   * @param {string} filler default(...)
   * 
   * @return {string}
   */
  truncate: function (value, length = 15, filler = '...') {
    if (value.length <= length) {
      return value;
    }

    return value.substring(0, length) + filler;
  }
};
