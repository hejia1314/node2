//导出中间件，让外界可以使用
module.exports = (req,res,next)=>{
    //给res对象安装success 方法
    res.success =(data)=>{
        res.send({
            code:0,
            data:data,
            msg:"测试操作成功!"
        });
    }
    //给res对象安装fail 方法
    res.fail =(msg)=>{
        res.send({
            code:-1,
            msg:msg
        })
    }
    next();
}