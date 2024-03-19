module.exports.renderSignupForm=async(req,res)=>{
    res.render("user/login.ejs");
};

if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
  }
  