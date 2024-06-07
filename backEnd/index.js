const connection=require('./connection')
const express=require('express')
const cors=require('cors')
const userRoute= require('./Routes/user.js')

const app=express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())   

app.get('/',(req,res)=>{
    console.log(req)
    return res.send("hello")
})
 

 app.use('/user',userRoute)


module.exports=app