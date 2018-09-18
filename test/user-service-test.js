require('../db')
let userService = require("../service/user");
async function testRegisterUser() {
    let user = {
        username :"ls",
        password :"123456",
        age :20
    }
   let res =await userService.registerUser(user)
    console.log(res);
}

async function testGetUser() {
    let user = await userService.getUser("zs");
    console.log(user);
}
async function deleteUser() {
    await userService.deleteUser("");

}
async function testLoginUser() {
    let user = {
        username:"zs",
        password:"123456",
    }
   let token =  await userService.LoginUser(user);
    console.log(token);
}
testRegisterUser()