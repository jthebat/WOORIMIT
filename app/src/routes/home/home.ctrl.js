"use strict";

const { use } = require(".");
const UserStorage = require("../../models/UserStorage");


const output = {
    home : (req,res)=>{ 
        res.render("home/index");  //app.set("views","./views"); 가 있기 때문에 res.render("/views/home/index");안해줘도 된다.
    },
    login : (req,res)=>{
        res.render("home/login"); //app.set("views","./views"); 가 있기 때문에 res.render("/views/home/login");안해줘도 된다.
    },
};


const process = {
    login: (req,res) => {
       
        const id = req.body.id,
        psword = req.body.psword;

        
        const users = UserStorage.getUsers("id","psword");
      
        const response = {};

        if(users.id.includes(id)){
           
            const idx = users.id.indexOf(id);
            if(users.psword[idx]===psword){
                response.success = true;
                return res.json(response);
            }
        }   

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
};
module.exports = { 
    output,
    process,
    
};