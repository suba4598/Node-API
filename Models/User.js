const mongoose=require('mongoose');

const UserSchema = mongoose.Schema({
Email:String,
MobileNo:Number,
username:String,
password:String
});

module.exports = mongoose.model('User',UserSchema);
