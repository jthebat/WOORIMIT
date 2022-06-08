"use strict";
const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
   loginBtn = document.querySelector("button");

   //console.log(id); //null이나온다 ejs에서에서 console.log가 document에서 id를 가져오기도 전에 실행되기 떄문에 ejs defer라는 옵션을 통해 해결 async wait와 관련있는 듯 찾아볼것

loginBtn.addEventListener("click",login);

function login(){
    const req ={
        id: id.value,
        paword: psword.value,
    };
    //console.log(req);
console.log(req);
console.log(JSON.stringify(req));  //위와 출력값 비교
console.log(req,JSON.stringify(req));

fetch("/login",{
    method: "POST",
    header: {
        "Content-Type":"application/json", //header를 통해 내가 전달하는 데이터가 json형태임을 알림
    },
    body: JSON.stringify(req),
    }).then((res)=>res.json())
    .then(console.log);
}