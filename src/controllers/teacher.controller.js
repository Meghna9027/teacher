const express=require('express')
const router =express.Router()
const authenticate=require('../middleware/authenticate')

const Teacher=require("../models/teacher.model")

router.post('',authenticate, async (req, res) => {
    try {
        // console.log("admin",req.user)
        const ADMINID=req.user._id

        const teachers = await Teacher.create({
            name:req.body.name,
            gender:req.body.gender,
            age:req.body.age,
            class_id:req.body.class_id,
            admin_id:ADMINID,
        })

        return res.send(teachers)
    } catch (error) {
        return res.send(error.message)
    }
})

router.get('', async (req, res) => {
    try {
        const teachers = await Teacher.find().populate({path:"class_id",select:["section","grades","subject"]}).lean().exec()
        res.send(teachers)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const teachers = await Teacher.findById(req.params.id).lean().exec()
        res.send(teachers)
    } catch (error) {
        res.send(error.message)
    }
})

router.patch("/:id",async(req,res)=>{
    try {
        const teachers=await Teacher.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
          return res.send(teachers);
    } catch (error) {
         res.send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const teachers = await Teacher.findByIdAndDelete(req.params.id).lean().exec()
        res.send(teachers)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports=router