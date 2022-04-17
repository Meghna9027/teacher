require('dotenv').config()
const jwt=require('jsonwebtoken')
const User=require('../models/admin.model')

const newToken=(user)=>{
    
    return jwt.sign({user},`${process.env.JWT_SECRET_KEY}`)
 }

const register=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email}).lean().exec()
        if(user) 
        return res.status(400).send({message:"try another email"})
 
        user=await User.create(req.body)

        const token=newToken(user)

       return res.send({user,token})
    } catch (error) {
       return res.status(500).send(error)
    }
}

const login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user)
       return res.status(400).send({ message: "Please try another email " });
  
      const match = user.checkPassword(req.body.password);
  
      if (!match)
        return res.status(400).send({ message: "Please try another password" });
  
      const token = newToken(user);

      res.send({ user, token });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

module.exports={register,login}