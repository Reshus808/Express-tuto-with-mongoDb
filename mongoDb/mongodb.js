const {MongoClient} = require('mongodb');
//other way require
// const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const databaseName = 'student';
const client = new MongoClient(url);

//
// database connection
const dbConnect = async () => {
  let result = await client.connect();
  // let db = result.db('student')
  let db = result.db(databaseName);
  // let collection = db.collection('products');
  return db.collection('products');
  //get all data
  // let data = await collection.find({}).toArray();
  //find by name
  // let data = await collection.find({name: 'm 40'}).toArray();
  // console.log(data);

}

// console.log(dbConnect);


module.exports = dbConnect;