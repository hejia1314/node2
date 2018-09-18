let Product = require('../model/product');
let config = require('../config');

/*
添加商品*/
async function addProduct(product) {
   return await Product.create(product)
}

/*
分页获取商品数据*/
async function getProductsByPage(page=1) {
  return await Product.find().skip((page-1)*config.PageCount).limit(config.PageCount)
      .sort("created").select("-__v");
}
//判断id 是否存在
async function isIdExist(id) {
   let p = await Product.findOne({_id:id})
    if(!p){
       throw Error(`id为${id}的商品不存在`)
    }
}

/*
根据id 更新商品内容*/
async function updateProduct(id,update) {
   await isIdExist(id);
   let res = await Product.updateOne({_id:id},update)
    if(res.n <1){
        throw Error("更新失败")
    }
}

/*
根据id 删除商品*/
async function deleteProduct(id) {
   await isIdExist(id)

  let result =  await Product.deleteOne({_id:id})
    if (result.n<1){
        throw Error("删除失败")
    }
}
/*
获取商品信息*/
async function getProductById(id) {
    await isIdExist(id)
   return await Product.findOne({_id:id})
}
module.exports ={
    addProduct,
    getProductsByPage,
    updateProduct,
    deleteProduct,
    getProductById
}