const mongoose= require('mongoose')
const contactSchema=mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
      type:String
    },
    phone:{
        type:String
    }
})
const contact=module.exports=mongoose.model('contact',contactSchema)