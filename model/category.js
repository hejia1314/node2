const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,"分类名字不能为空..."]
    },
    created: {
        type: Date,
        default: Date.now() // 默认值为当前时间
    }
});
module.exports = mongoose.model('categorys', schema);


