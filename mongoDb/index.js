
const dbConnect= require('./mongodb');

//read data
//promise use
dbConnect().then(res => {
  res.find().toArray().then((data)=>{
    console.log(data)
  });
})

// async  and aait use
const main = async () => {
  let data = await dbConnect();
  data =  await data.find().toArray();
  // console.log('main function calling')
  console.log(data)
}
main();