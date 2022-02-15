const express = require("express")
const cors = require("cors")
const mongoos = require("mongoose")
const dotenv = require('dotenv')
const userRoutes = require("./routes/userRoutes")
const adminRoutes = require("./routes/adminRoutes")
const app = express()



dotenv.config()
mongoos.connect('mongodb://localhost:27017/',{
    useNewUrlParser:true,
    useUnifiedTopology :true
},()=>{
    console.log("DB connected");
})

app.use(express.json())
// app.use(cors())


app.use('/api/users',userRoutes)
app.use('/api/admin',adminRoutes)



const PORT = process.env.PORT || 4000
app.listen(PORT,
    console.log(`server started at port ${PORT}`)
)