module.exports.renderSignupForm=async(req,res)=>{
    res.render("user/signup.ejs");
};

if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
  }
  