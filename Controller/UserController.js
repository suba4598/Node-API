const RegModel = require('../Models/User')

module.exports = {

    AddUser:(req,res)=>{
    let User= new RegModel({
    Email: req.body.Email,
    MobileNo: req.body.MobileNo,
    username: req.body.username,
    password: req.body.password
})
User.save()
 .then(result=>{
     res.json({success:'Registration Successfull', result:result})
 })
.catch(err=>{

    res.json({success:false, result:err})
})
},
RetrieveUser:(req, res)=>{
RegModel.find()
.then(User =>{
    res.send(User);
})
.catch(err=>{
    res.json({success:false,result:"No Register data found"})
})

},




DeleteUser: (req, res) => {
   
    RegModel.findByIdAndRemove({ _id: req.body._id})
    .then(User => {
        if(!User) {
            return res.status(404).send({
                message: "User not found with id " + req.params._id
            });
        }
        res.send({message: "User deleted successfully!"});
    })
    .catch(err => res.json({success: false, result: err}))
},
UpdateUser: (req, res) => {
    RegModel.findByIdAndUpdate({_id: req.body._id}, req.body)
    .then(User => {
        res.send(User)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
},


// Username
Getlogindetailsbyusername: (req, res) => {

RegModel.findOne({
    username: req.body.username, password:req.body.password
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(200).send({ message: "userfound" });
      return;
    }
    else{
        res.status(200).send({ message: "Failed! Username is already in use!" });
        return;
    }
})
  
}}


