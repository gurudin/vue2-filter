export default {
  /**
   * 
   * @param {array} value 
   * @param {string|array} query 
   */
  filter: function(value, query){
    var result = [];
    var search = [];
    typeof query == 'string' ? search.push(query) : search = query;

    result = value.filter(row =>{
      let tmp = false;

      if (typeof row == 'string') {
        search.forEach(q =>{
          if (row.indexOf(q) > -1) {
            tmp = true;
          }
        });
      } else {
        search.forEach(q => {
          Object.keys(row).forEach(key =>{
            if (['string', 'number'].indexOf(typeof row[key]) > -1
              && row[key].toString().indexOf(q) > -1
            ) {
              tmp = true;
            }
          });
        });
      }
      
      return tmp;
    });

    return result;
  }
};