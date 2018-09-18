const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    productId:{
   type:mongoose.Schema.Types.ObjectId,
        required:[true,"商品id 不能为空"]
    },
    productName:{
        type:String,
        required:[true,"商品名字不能为空"]
    },
    productPrice:{
        type:String,
        required:[true,"商品价格不能为空"]
    },
    count:{
        type:Number,
        required:[true,"商品数量不能为空"],
        min:[1,"商品数量不能小于1..."]
    },
    totalPrice:{
        type:String,
        required:[true,"商品总价不能为空"],
    },
    status:{
        type:String,
        default:"unpay" ,//几种取值： unpay success cancel
    },
    created: {
        type: Date,
        default: Date.now() // 默认值为当前时间
    },
    payTime:{
        type :Date
    },
    cancelTime:{
        type:Date
    }
});
module.exports = mongoose.model('orders', schema);


