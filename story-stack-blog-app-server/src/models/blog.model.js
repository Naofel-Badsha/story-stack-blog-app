const mongoose = require('mongoose');
const kittySchema = new mongoose.Schema({
  title: {
   type: String, 
   require: true
},
  description: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  author: {
    type: Object
  }
});