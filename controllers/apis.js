const Item = require('../model/items')
const User = require('../model/users')
const jwt = require('jsonwebtoken')

const getAllItems =  (req, res)=>{
    Item.find()
        .then((data)=>res.json(data))
        .catch((err)=>res.send(err))
}

const register = async(req,res)=>{
    const {name, phno, email, pwd} = req.body;
    if(!name) return res.status(400).send('Name is Required!')
    if(!phno || phno.length!=10) return res.status(400).send('Phone Number is Required and should be 10 characters long!')
    if(!pwd || pwd.length < 6) return res.status(400).send('Password is Required and should be minimum 6 characters long!')

    let emailExists = await User.findOne({email}).exec()
    let phnoExists = await User.findOne({phno}).exec()
    if(emailExists) return res.status(400).send('Email already exists!')
    if(phnoExists) return res.status(400).send('Phone Number already exists!')

    const usr = new User(req.body)
    try{
        await usr.save()
        console.log('REGISTRATION SUCCESS', usr)
        return res.json({ok:true})
    } catch(err){
        console.log('REGISTRATION FAILED', err)
        return res.status(400).send('Error. Try again!')
    }
}

const login = async(req,res)=>{
    const {email, pwd} = req.body;
    if(!email) return res.status(400).send('Email is Required!')
    if(!pwd) return res.status(400).send('Password is Required!')

    try {
        let usr = await User.findOne({email}).exec()
        if(!usr) return res.status(400).send('User with Email doesn\'t exists!')

        usr.comparePassword(pwd, (err, match)=>{
            if(!match || err) return res.status(400).send('Wrong Password!')
            let token = jwt.sign({_id: usr._id}, process.env.JWT_SECRET, 
                {expiresIn:'1d'})
            console.log('LOGIN SUCCESS', usr)
            res.json({token, usr})
        })    
    } catch (err){ 
        console.log('LOGIN FAILED', err)
        return res.status(400).send('Error. Try again!')
    }
}

const showMsg = (req, res)=>{
    res.status(400).send(`${req.params.msg}`)
}

module.exports = {getAllItems, showMsg, register, login}