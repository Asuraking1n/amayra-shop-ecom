
const Filterdata = (data) => {
    if(data){
        data = data.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t._id === value._id 
        ))
      )
      }
      return data
}

export default Filterdata