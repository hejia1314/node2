//用来回应操作成功的信息
function success(res,data) {
    res.send({
        code:0,
        data:data,
        msg:"测试操作成功!"
    });
}
//用来回应操作失败的信息
function fail(res,msg) {
    res.send({
        code:-1,
        msg:msg
    })
}
module.exports = {
    success,
    fail
}