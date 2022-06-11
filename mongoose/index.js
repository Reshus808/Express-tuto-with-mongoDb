const mongoose = require('mongoose');

//first way to connect
// const main = async () =>{
//   await mongoose.connect("mongodb://localhost:27017/student");
//   const ProductsSchema = new mongoose.Schema(
//       {name: String,price: Number}
//   );
//   const ProductsModel = mongoose.model('products', ProductsSchema);
//   let data = new ProductsModel({name:"m 10", price: 1000});
//   let result = await data.save();
//   console.log(result)
// }
// main();

mongoose.connect("mongodb://localhost:27017/student");
//design schema
const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String
});

//call schemma in model connect nodejs and db
const saveInDB = async () => {
  const Product = mongoose.model('products', productsSchema);
  let data = new Product({name: "note pro 10", price: 1500, brand: "max pro"});
  let result = await data.save();
  console.log(result)
}
// saveInDB();

const updateInDB = async () => {
  const Product = mongoose.model('products', productsSchema);
  let data = await Product.updateOne(
      {name: 'm 10'},
      {
               $set: {price: 12345, name: "max 100"}
             }
  )
  console.log(data);
}
// updateInDB();


const deleteInDB = async () => {
  const Product = mongoose.model('products', productsSchema);
let data = await Product.deleteOne({name:'m8'})
  console.log(data);
}
// deleteInDB();

const findInDB = async () => {
  const Product = mongoose.model('products', productsSchema);
  // let data = await Product.find() // all find data in db
  let data = await Product.find({name: 'm 40'})
  console.log(data);
}
findInDB();