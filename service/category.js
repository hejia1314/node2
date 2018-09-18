let Category = require(`../model/category`);
let config = require('../config');

/*添加一个分类*/
async function addCategory(category) {
   return await Category.create(category)
}

/*
分页查询分类数据*/
async function getCategorysByPage(page=1) {
  return  await Category.find().skip(config.PageCount*(page-1)).limit(config.PageCount).sort("created").select("-__v");
}
//判断分类 id 是否存在
async function isExist(id) {
    let  res = await Category.findOne({_id:id});
    if(!res){
        throw Error(`id为${id}的分类不存在...`)
    }
}

/*
更新分类*/
async  function updateCategory(id,update) {
    //判断id 是否存在
   await isExist(id)

   let result = await Category.updateOne({_id:id},update);

   if (result.n <1){
       throw  Error("更新失败")
   }
}

//删除分类
async function deleteCategroy(id) {
    await isExist(id)
   let res = await Category.deleteOne({_id:id});
    if (res.n <1){
        throw  Error("删除失败")
    }
}

module.exports ={
    addCategory,
    getCategorysByPage,
    updateCategory,
    deleteCategroy
}