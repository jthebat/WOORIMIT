"use strict";

const hello = (req,res)=>{ 
    res.render("home/index");  //app.set("views","./views"); 가 있기 때문에 res.render("/views/home/index");안해줘도 된다.
};

const login = (req,res)=>{
    res.render("home/login"); //app.set("views","./views"); 가 있기 때문에 res.render("/views/home/login");안해줘도 된다.
};

module.exports = { 
    hello,
    login,
};