//path node inbuilt module to resolve and matke our paths cleaner
const path = require('path')
const publicPath = path.join(__dirname, '../public')

const express = require('express')
const app = express()

//heroku deployment && local env  port
const port = process.env.PORT || 3000

//setup express middleware to render page to the browser
app.use(express.static(publicPath));


//listen on port
app.listen(port, () => {
  console.log(`Server is up on port ${3000}`);
});