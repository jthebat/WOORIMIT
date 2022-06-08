"use strict";


const output = {
    home : (req,res)=>{ 
        res.render("home/index");  //app.set("views","./views"); 가 있기 때문에 res.render("/views/home/index");안해줘도 된다.
    },
    login : (req,res)=>{
        res.render("home/login"); //app.set("views","./views"); 가 있기 때문에 res.render("/views/home/login");안해줘도 된다.
    },
};

//테스트로 쓸 데이터 아직 DB를 연결 안했기때문에 이걸로
const users = {
    id: ["woorimIt", "나개발", "김팀장"],
    pseword: ["1234","1234","123456"],
};

const process = {
    login: (req,res) => {
        const id = req.body.id,
        psword = req.body.psword;

        if(user.id.includes(id)){
            const idx = users.id.indecOf(id);
            if(users.psword[idx]===psword){
                return res.json({
                    success:true,
                });
            }
        }    

        return res.json({
            success:false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};
module.exports = { 
    output,
    process,
};