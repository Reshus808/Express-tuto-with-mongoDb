const express = require('express');
const EventEmitter = require("events");
const event = new EventEmitter();


const app = express();

let count=0;

event.on("countApi", ()=>{
  count++;
  console.log('event called', count)
})

app.get('/', (req, res) => {
  res.send('api called')
  event.emit("countApi");
})

app.get('/search', (req, res) => {
  res.send('search api called')
})


app.get('/update', (req, res) => {
  res.send('update api called')
})


app.get('/delete', (req, res) => {
  res.send('delete api called')
})


app.listen(5000, () =>{
  console.log('server is running on 5000')
});
