const dbConnect= require('./mongodb');


// update data
// const update = async () => {
//   const data = await dbConnect();
//   //update one first row
//   // const result = await data.updateOne(
//   const result = await data.updateMany(
//
//       {name: 'max 5'},{$set:{name: 'next 5', price: 1200}}
//   )
//   console.log(result);
//   // console.log('update data');
// }
//
// update();

// promise use update record
dbConnect().then(res => {
    res.updateOne({name: 'sam 40'}, {$set:{name: 'samsung 4'}}).then((data) => {
      console.log(data)
    });
    // console.log(res);
})