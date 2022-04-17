const express = require('express')

const connect=require("./configs/db")

const{register,login}=require("./controllers/auth.controller")
// const adminController=require("./controllers/admin.controller")
const teacherController=require("./controllers/teacher.controller") 
const classController=require('./controllers/class.controller')

const app = express()
app.use(express.json())

app.post('/register',register)
app.post('/login',login)
app.use("/teachers",teacherController)
app.use('/classes',classController)
// app.use("/admins",adminController)

app.listen(9999, async function () {
    try {
        await connect()
        console.log('listening on port 9999')
    } catch (error) {
        console.log('error:', error)
    }
})