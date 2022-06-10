const dbConnect= require('./mongodb');

// delete record

const deleteData = async () => {
  const data = await dbConnect();
  const result = await data.deleteOne(
  // const result = await data.deleteMany(
      // {name: 'next 5'},
      // empty data delete
      // {name: ''},
  )
  console.log(result);
  if(result.acknowledged){
    console.log('record deleted');
  }

  // console.log('delete data')
}
deleteData();