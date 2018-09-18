let productService = require("../service/product");
let router = require('express').Router();
//获取
router.get('/',async(req,res)=>{
    let products = await productService.getProductsByPage(req.query.page)
    res.success(products)
})
//添加
router.post('/',async(req,res)=>{
   let product = await productService.addProduct(req.body)
    res.success(product)
})
//更新
router.put('/:id',async(req,res)=>{
    await productService.updateProduct(req.params.id,req.body)
    res.success()
})
//删除
router.delete('/:id',async(req,res)=>{
    await productService.deleteProduct(req.params.id)
    res.success()
})

module.exports =router