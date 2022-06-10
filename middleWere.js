const express = require('express')
const path = require('path')
const reqFilter = require('./middle');
const app = express();
const route = express.Router();
route.use(reqFilter);

// const reqFilter = (req, res, next) => {
//   if(!req.query.age)
//   {
//     res.send('please provide age')
//   }else if (req.query.age < 18) {
//    res.send("you can not access this page")
//   } else{
//     console.log('reqFilter');
//     next();
//   }
// }

// app.use(reqFilter); // use for all routes



//no use middlewere
app.get('/', (req, res) => {
    res.send('<h1>welcome, home page </h1>')
});

app.get('/user', (req, res) => {
  res.send('<h1>welcome, user page </h1>')
});

// this is single middlewere without route single use middleWere
app.get('/check',reqFilter, (req, res) => {
  res.send('<h1>welcome, check page </h1>')
});


//under routes use middlewere
app.use('/', route);

route.get('/contact', (req, res) => {
  res.send('<h1>welcome, contact page </h1>')
});


route.get('/about', (req, res) => {
  res.send('<h1>welcome, about page </h1>')
});


app.listen(5000,()=>{
  console.log('server is running on 5000')
})


