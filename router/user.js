let router = require('express').Router();
let userService = require(`../service/user`);

//获取用户信息
router.get('/:username',async(req,res)=>{
 let user =  await userService.getUser(req.params.username);
 res.success(user)
});
//注册
router.post('/register',async(req,res)=>{
   let result = await  userService.registerUser(req.body);
   res.success(result)

})
//登录
router.post('/login',async(req,res)=>{
   let token = await userService.LoginUser(req.body);
   res.success({token})
})
//删除用户
router.delete('/:username',async(req,res)=>{
 let user = await userService.deleteUser(req.params.username);
 res.success()
})

module.exports = router;