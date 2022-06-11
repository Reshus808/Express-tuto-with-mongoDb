const express = require('express')
require('./config')
const Product = require('./product')
const app = express();
app.use(express.json());

app.post('/create',  async (req, res) =>{
  let data = new Product(req.body)
  const result =  await data.save();
  console.log(result);
  res.send(result)
  // console.log(req.body)
  // res.send("done")
});

app.get('/list', async (req, res) => {
  let data = await Product.find();
  res.send(data)
});

app.delete('/delete/:_id', async (req, res) => {
  console.log(req.params);
  // let data = await Product.deleteOne({id: '62a2e24111967c50067624c2'});
  let data = await Product.deleteOne(req.params);
  res.send(data);
  // res.send('done');
});

app.put('/update/:_id', async (req, res) => {
  console.log(req.params);
  // let data = await Product.deleteOne({id: '62a2e24111967c50067624c2'});
  let data = await Product.updateOne(
      // {}condition
      req.params,
        //set updated data
      {$set:req.body}
  );
  res.send(data);
  // res.send('done');
});


app.listen(5000)