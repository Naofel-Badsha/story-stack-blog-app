//-------Connect Server---------
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 8000;


//-------getting-started.js---------
const mongoose = require('mongoose');


//---------Middleware---------
app.use(express.json());
app.use(cors());


//-----------routes------------
const blogRoutes = require('./src/routes/blog.routes')
app.use('/blogs', blogRoutes)




//--------Mongoose--------Configration----------
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);

  app.get('/', (req, res) => {
    res.send('Story Stack Blog Server Is Running..!')
  })

}
main()
  .then(() => console.log("Mongodb Connected Successfully"))
  .catch(err => console.log(err));

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

