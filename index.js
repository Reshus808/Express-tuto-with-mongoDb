const express = require('express')
const path = require('path')

const app = express();

const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs')

app.get('/profile', (_, res) => {
  const user={
    name: 'reshu',
    email: 'reshu123@gmail.com',
    skills: ['react', 'java', 'express']
  }
  res.render('profile', {user})
})


app.get('/login', (_, res) =>{
  res.render('login')
})
// app.use(express.static(publicPath));

app.get('',(_, res) => {
  res.sendFile(`${publicPath}/home.html`)
})

app.get('/about',(_, res) => {
  res.sendFile(`${publicPath}/about.html`)
})

app.get('*',(_, res) => {
  res.sendFile(`${publicPath}/404.html`)
  // res.send('invalid page')
})

app.listen(8000);

