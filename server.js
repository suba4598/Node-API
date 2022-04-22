const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Database
mongoose.connect('mongodb://localhost:27017/Registration', {useNewUrlParser:true})
.then(()=>console.log("connected to database"))
.catch(err=>console.log(err))

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(function(req,res,next)
{
    //website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    //Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS,PATCH,DELETE');

    //Request headers you wish to Allow
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');

    //Set to true if you need the website to include  cookies in the requests sent 
    // to the API (e.g in case you use in session)
    res.setHeader('Access-Control-Allow-Credentials',true);

    //pass to next layer of Middleware
    next();
})

//Routing part
const UserController = require('./Controller/UserController');
app.post('/api/User/AddUser',UserController.AddUser)
app.get('/api/User/RetrieveUser',UserController.RetrieveUser)
app.delete('/api/User/DeleteUser',UserController.DeleteUser)
app.post('/api/User/UpdateUser',UserController.UpdateUser)
app.post('/api/User/Getlogindetailsbyusername',UserController.Getlogindetailsbyusername)



//start server
app.listen(3400,()=> console.log("server started on 3400"))   
