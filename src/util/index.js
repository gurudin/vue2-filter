export default {
  extend: function(obj) {
    var target = {};
    for (const i in obj) {
      for (const j in obj[i]) {
        target[j] = obj[i][j];
      }
    }

    return target;
  }
};
