let User = require('../model/user');
let config = require(`../config`);
let crypto = require('lxj-crypto');

/*
* 根据用户名获取某个用户
* */
async function getUser(username) {
   let result = await User.findOne({username:username}).select("-__v -password");
    if (!result){
       throw  Error("用户名为${name}的用户不存在哦...")
    }
    return result;
}

/**
 * 根据username，判断用户是否存在方法
 */
async  function isUserExist(username) {
    let result = await User.findOne({username:username})
    if (!result){
        throw  Error("用户名为${name}的用户不存在哦...")
    }
}

/*
* 删除用户
* */
async function deleteUser(username) {
   await isUserExist(username)
    let res = await User.deleteOne ({username:username})
    if (res.n<1){
        throw Error("用户删除不成功")
    }
    //return res;
}
/*注册
* */
async function registerUser(user) {
    let res = await User.findOne({username:user.username})
    if (res){
        throw  Error(`用户名为${user.username}的用户已经存在哦...`)
    }
    //存库前须先加密密码 ,参数1，用户原密码，参数2，加盐处理
  user.password =  crypto.sha1Hmac(user.password,user.username);
    user .role = 0;//默认是普通商家权限
    user.created = Date.now() //设置默认创建时间
    //存库操作
   let result = await User.create(user);
    result.password ="";
   return  result;
}
/**
 * 登录
 */
async function LoginUser(user) {
   //1.对密码进行加密
    user.password = crypto.sha1Hmac(user.password,user.username);
    //2.去数据库查询用户是否存在
   let res = await User.findOne({username:user.username,password:user.password});
   if (!res){
       throw Error("用户名或者密码错误...")
   }
   //3.登录成功，生成token返回给客户端，用aes算法生成
    let tokenData = {
       username :user.username,
        expire:Date.now()+ config.TokenExpire
    }
    let  token = crypto.aesEncrypt(JSON.stringify(tokenData),config.TokenKey)
    return token;
}
//把所有方法导出
module.exports = {
    getUser,
    deleteUser,
    registerUser,
    LoginUser
}
