const mongoose = require ("mongoose")
const bcrypt = require("bcryptjs")


const userSchema = mongoose.Schema(
{
    fname :{
        type: String,
        required:true,
    },
    lname :{
        type: String,
        required:true,
    },
    phone :{
        type: Number,
        required:true,
    },
    email:{
        type:String,
        requires:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
}    
)
userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }
    const salt =await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}
const User =mongoose.model("User",userSchema)

module.exports = User