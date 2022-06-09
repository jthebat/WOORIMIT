"use strict";
const fs = require("fs").promises;

class UserStorage{
    static #getUserInfo(data,id){
        const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const userKeys = Object.keys(users); // => [id,psword,name]
            const userInfo = userKeys.reduce((newUser,info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }

    static #getUsers(data, isAll,fields){
        const users = JSON.parse(data); //data에 담겨있는것은 버퍼 데이터다 따라서 parse해줘야 한다
        if(isAll) return users;

        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] =users[field];
            }
            return newUsers;
         },{});
         return newUsers;
    }
 
    static getUsers(isAll,...fields){
        return fs
        .readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getUsers(data,isAll, fields);
        })        
        .catch(console.error);
        
        
    }
    static getUserInfo(id){
       
        return fs
        .readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getUserInfo(data,id);
        })        
        .catch(console.error);  
        
    }
   

    static async save(userInfo){
        const users = await this.getUsers(true);  //"id","psword","name" 모든 필드명 쓸때는 그냥 true라고 바꿔주면 모든 필드면 쓴 효과
        if(users.id.includes(userInfo.id)){
         throw "이미 존재하는 아이디입니다.";        
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json",JSON.stringify(users));
        return {success: true};
    }
}

module.exports = UserStorage;