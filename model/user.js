
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    username: { //用户名
        type: String,
       unique:true,//唯一约束
        request:[true,"用户名不能为空"]
    },
    password:{//密码
        type:String,
        require:[true,"密码不能为空"]
    },
    age:{//年龄
        type:Number,
        min:[0,"年龄不能小于0哦..."],
        max:[120,"年龄不能大于120 哦..."],
        default:28
    },
    role:{//权限校验
        type:Number,
        default:0//0是商家, 100表示管理员
    },
    created:{//创建时间
        type:Date,
        default:Date.now()
    }
});
module.exports = mongoose.model('user', schema);


