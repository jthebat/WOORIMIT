"use strict";
const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
   registerBtn = document.querySelector("#button");

   //console.log(id); //null이나온다 ejs에서에서 console.log가 document에서 id를 가져오기도 전에 실행되기 떄문에 ejs defer라는 옵션을 통해 해결 async wait와 관련있는 듯 찾아볼것

registerBtn.addEventListener("click",register);

function register(){
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(psword.value!==confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req ={
        id: id.value,
        name: name.value,
        psword: psword.value,
    };
    //console.log(req);
console.log(req);
console.log(JSON.stringify(req));  //위와 출력값 비교
console.log(req,JSON.stringify(req));

fetch("/register",{
    method: "POST",
    headers: {
        "Content-Type":"application/json", //header를 통해 내가 전달하는 데이터가 json형태임을 알림
    },
        body:JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href = "/login";
        }
        else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
            console.error("회원가입 중 에러 발생");
        }
    );
}