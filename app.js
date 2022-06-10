// const express = require('express');
// const app = express();
//
// app.get('/', (req, res) => {
//     console.log('data sent by browser ===>', req.query.name)
//     res.send(`<h1>hello world this is express node js</h1><a href="/about">Go to about Page</a>`)
//     // res.send('<h1>welcome, </h1>' + req.query.name)
//
// });
//
// app.get('/about', (req, res) => {
//     res.send(`
//     <input type= "text" placeholder="user name" value="${req.query.name}" />
//     <button>Click Me</button>
//     <a href="/">Go to home Page</a>
//     `);
// })
//
// app.get('/jsondata', (req, res) => {
//     res.send([
//         {name: 'reshu', email: 'reshu@gmail.com'},
//         {name: 'renu', email: 'renu@gmail.com'},
//     ])
// })
//
//
//
//
//
//
//
// // app.listen(8000)
// app.listen(8000, () => {
//     console.log(`server is running 8000`);
// })