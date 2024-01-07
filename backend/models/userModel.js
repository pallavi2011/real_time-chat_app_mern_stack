const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type:string,
        required:true
    },
    password:{
        type:string,
        required:true
    },
    photo:{
        type:string,
        required:true,
        default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    

},
{
    timeStamps : true,
})

const User = mongoose.Model("User", userSchema);

module.exports = User;
