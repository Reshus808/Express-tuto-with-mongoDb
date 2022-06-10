module.exports = reqFilter = (req, res, next) => {
  if(!req.query.age)
  {
    res.send('please provide age')
  }else if (req.query.age < 18) {
    res.send("you can not access this page")
  } else{
    console.log('reqFilter');
    next();
  }
}