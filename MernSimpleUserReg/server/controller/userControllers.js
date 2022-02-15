const User = require("../model/usermodel")
const asyncHandler = require("express-async-handler")
const generateToken=require('../util/generateToken')

const registerUser = asyncHandler (async (req,res) =>{

    console.log(req.body)
   
    const {fname,lname,phone,email,password} = req.body
    console.log(email)
    // try{
    //     const userExists = await User.findOne({email})
    // }
    // catch{
        const user = await User.create({fname,lname,phone,email,password
        })
        
        if(user){
            res.status(201).json({
                _id:user._id,
                fname:user.fname,
                lname:user.lname,
                phone:user.phone,
                email:user.email,
               token:generateToken(user._id)
    
            })
        }else{
            res.status(400)
            throw new Error("new error")
        }
    // }
    

//     if(userExists){
// res.status(400)
// throw new Error("user already exists")
//     }
    
    

   
})


const authUser = asyncHandler (async (req,res) =>{
   
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            fname:user.fname,
            lname:user.lname,
            phone:user.phone,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        throw new Error("Invalid credentials")
    }
    
   
})


const getAllUsers = asyncHandler (async (req,res) =>{
      try {
          const users=await User.find({})
          res.json(users)
      } catch (error) {
          res.json(error)
      }
     
})
const deleteUser = asyncHandler(async (req,res,next) => {
    const user = await User.findById(req.params.id)
// / console.log(req.params.id);
     await user.remove()
     res.json({})


})

const updateUser = asyncHandler(async (req,res,next) => {
   
  const newUserData ={
fname:req.body.fname,
lname:req.body.lname,
phone:req.body.phone,
email:req.body.email

  }
  
  const user =await User.findByIdAndUpdate(req.params.id,newUserData,{
      new:true,
      runValidators:true,
      useFindAndModify:false
  })
res.status(200).json({
    success:true

})
 
})

const getUser = asyncHandler (async (req,res,next) =>{
const user = await User.findById(req.params.id)
res.json(user)
})

const getOneUserBySearch =asyncHandler (async (req,res) =>{
    const { search } =req.body

    try {
        const users = await User.find({fname:search})
        res.json(users)
    } catch (error) {
        res.json(error)
    }
})
    
  
module.exports = {registerUser,authUser,getAllUsers,deleteUser,updateUser,getUser,getOneUserBySearch}