const dbConnect = require('./mongodb');

//insert data
const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany(
      [
        {name: 'note 5', model: 'vivo', price: 678},
        {name: 'max 5', model: 'moto', price: 700},
      ]
  )
  if (result.acknowledged) {
    console.log('data inserted')
  }
}
insert();