let categoryService = require("../service/category");
let router = require('express').Router();



//查询
router.get('/',async(req,res)=>{
   let categorys = await categoryService.getCategorysByPage(req.query.page);
   res.success(categorys)
})
//添加
router.post('/',async(req,res)=>{
   let abc = await categoryService.addCategory(req.body)
    res.success(abc)
})
//更新
router.put('/:id',async(req,res)=>{
    await categoryService.updateCategory(req.params.id,req.body)
    res.success()
})
//删除
router.delete('/:id',async(req,res)=>{
    await categoryService.deleteCategroy(req.params.id)
    res.success();
})
module.exports = router

