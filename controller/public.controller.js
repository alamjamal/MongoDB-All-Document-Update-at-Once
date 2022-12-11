const {publicValidate} = require('../validate/public.validate')
const crypto = require('crypto');

const {getDb} = require('../_helper/dbConnect');
// const db = getDb();


const register = async(req, res)=>{
    const {error} = await publicValidate(req.body, req.method)
    if (error) return res.status(400).json({message:error.message})
    res.status(200).json({message:"everything is fine"})
}


const addPassCode = async(req, res)=>{
   
    let passCode
    // const users  = await db.collection('users').find().toArray()
   const user =  await db.collection('schools').find().forEach( school => {
            passCode = crypto.randomBytes(16);
            passCode = passCode.toString('hex'); 
            console.log(passCode)
            db.collection('schools').updateOne({_id: school._id}, {$set: {passCode}});
      })

    res.status(200).json({message:"everything is fine", user:user})
}


module.exports={register, addPassCode}