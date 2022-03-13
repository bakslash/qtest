const models = require("../models/index");
const config = require("../config/auth.config.js");
const returns = require('./returns')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { use } = require("passport/lib");


exports.login = async (req, res, next) => {
    try {
      const user = await models.personnel.findOne({
        where: {
          phone: req.body.phone
        }
      })
      if (!(req.body.phone && req.body.password)) {
        res.status(400).send("phone and password is required");
      }
  
      if (!user) {
        return res.status(404).send({
          message: "User Not found."
        });
      }


      const passwordIsValid = await bcrypt.compare(req.body.password,
        user.password);

      if (!passwordIsValid) {
          console.log(req.body.password, 'from db',user.password);
        return res.status(401).send({
          message: "You have enterred incorrect Password!"
        });
      }
  
      if(user&& passwordIsValid ){
        var expiresIn= "24h"
        var accessToken = jwt.sign({
          id: user.id
        }, config.secret, {
          expiresIn: expiresIn // 24 hours
        });
  
      }
      user.token = accessToken
      user.expires_in =  expiresIn
      console.log(expiresIn);
     const userverified = { 
        accessToken:user.token, 
        expires_in:user.expires_in,
        reset_password:user.reset_passord}
      //add passport-jwt
     
     
      await returns.successfullReturns(req, res,userverified)
  
    } catch (err) { console.log(err); }
  };

  exports.getPersonnel = async(req,res, next)=>{
    try{
        console.log('getting personel ');
    const personnel = await models.personnel.findAll()
    console.log(personnel);
    await returns.successfullReturns(req,res,personnel)
    }catch(err){
        console.log(err);
    }
}