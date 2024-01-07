const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    chatName:{
        type:String, 
        trim:true
    },
    isGroupChat:{
        type:boolean,
        default:false
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Messages"
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
{
    timeStamps : true,
})

const Chat = mongoose.Model("Chat", chatSchema);

module.exports = Chat;