const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{//商品名
        type:String,
        unique:true,
        required:[true,"商品名不能为空..."]
    },
    price:{//商品价格
        type:String,
        required:[true,"商品价格不能为空..."]
    },
    stock:{//库存
        type:Number,
      default:0,
    },
    description:{//商品描述
        type:String
    },
    isOnSale:{//是否上架
        type:Boolean,
        default:true
    },
    category:{//分类
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"商品分类不能为空..."]
    },
    created: {
        type: Date,
        default: Date.now() // 默认值为当前时间
    }
});
module.exports = mongoose.model('products', schema);


