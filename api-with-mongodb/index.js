const dbConnect= require('../mongoDb/mongodb');
const express = require('express')
const app = express();
const mongodb = require('mongodb');
app.use(express.json());


//show data
app.get('/', async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  // res.send({name: 'resu'})
  res.send(data);
});

//save data
app.post('/', async (req, res)=>{
  // console.log(req.body)
  // res.send({name: 'reshu'})
  // res.send(req.body);
  let data = await dbConnect();
  let result =await data.insertOne(req.body)
  res.send(result);
});


// update data
app.put('/:name', async (req, res) => {
  let data = await dbConnect();
  let result = data.updateOne(
      //static update
      // {name: "reshma mahi"}, {$set:{name: 'rich pratap singh'}}
      // {name: "rich pratap singh"}, {$set:req.body}
  //    dynamic update
  //     {name: req.body.name}, {$set:req.body} // url based

      //queru based update
      {name: req.params.name}, {$set:req.body}
  )
  // console.log(req.body)
  res.send({result: "update"});
})

app.delete('/:id', async (req, res) => {
  console.log(req.params.id)
  const data = await dbConnect();
  const result =  await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
  res.send(result)
  // res.send({name: 'delete data'})
})

//server listen
app.listen(5000);

// from request get body use body-parser version before 4.6 after 4.6 no need of body-parser