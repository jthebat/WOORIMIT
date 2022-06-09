"use strict";

const { use } = require(".");
const User = require("../../models/User");



const output = {
    home : (req,res)=>{ 
        res.render("home/index");  //app.set("views","./views"); 가 있기 때문에 res.render("/views/home/index");안해줘도 된다.
    },
    login : (req,res)=>{
        res.render("home/login"); //app.set("views","./views"); 가 있기 때문에 res.render("/views/home/login");안해줘도 된다.
    },
    register: (req,res)=>{
        res.render("home/register");
    },
};


const process = {
    login: async (req,res) => {
        const user = new User(req.body);
        const response =await user.login();
        return res.json(response);         
    },
    register: (req,res) =>{
        const user = new User(req.body);
        const response =user.register();
        return res.json(response);   
    },
};
module.exports = { 
    output,
    process,    
};