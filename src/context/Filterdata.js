
const Filterdata = (data) => {
    if(data){
        data = data.filter((value, index) => {
          const _value = JSON.stringify(value);
          return index === data.findIndex(obj => {
            return JSON.stringify(obj) === _value;
          });
        });
      }
      return data
}

export default Filterdata