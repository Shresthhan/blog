const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {type:String,required:true},
  userName: {type:String,required:true},
  gender: { type: String,
    enum: [ "Male", "Female","Other" ], default: 'Male'
  },
  email: {type:String,required:true},
  password: {type:String,required:true},
});
const User = mongoose.model('Blog', userSchema);
module.exports = User