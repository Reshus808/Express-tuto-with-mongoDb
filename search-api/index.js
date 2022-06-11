const express = require('express')
require('../Post-Api-mongoose/config')
const Product = require('../Post-Api-mongoose/product')
const app = express();

app.use(express.json());

app.get('/search/:key', async (req, res) => {
  console.log(req.params.key)
  let data = await Product.find(
      {
        "$or":[
          //  sing search
          {"name":{$regex:req.params.key}},
           // multi search
          {"brand":{$regex:req.params.key}}
        ]
      }
  );

  res.send(data);
  // res.send('search field')
})

app.listen(5000);