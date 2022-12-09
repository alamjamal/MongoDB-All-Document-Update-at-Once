const {publicValidate} = require('../validate/public.validate')
const crypto = require('crypto');
const mongoose = require('mongoose');


const register = async(req, res)=>{
    const {error} = await publicValidate(req.body, req.method)
    if (error) return res.status(400).json({message:error.message})
    res.status(200).json({message:"everything is fine"})
}


const addPassCode = async(req, res)=>{
    schools.find({passCode: {$exists: true}}).forEach( school => {
        let passCode = crypto.randomBytes(16);
            passCode = passCode.toString('hex'); 
            console.log(passCode)
            schools.updateOne({_id: school._id}, {$set: {passCode}});
      })
    res.status(200).json({message:"everything is fine"})
}


module.exports={register, addPassCode}