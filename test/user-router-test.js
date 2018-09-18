require("../db")
let categoryService = require("../service/category");

async function testAddCategory() {
    let category = [
        {name :"女装"},
        {name :"男装"},
        {name :"母婴"}
    ]

    await categoryService.addCategory(category)
}

async function testGetCategorysByPage() {
    let res = await categoryService.getCategorysByPage(1)
    console.log(res)
}
async function testUpdateCategory() {
    let update ={
        name:"水果"
    }
   let res = await  categoryService.updateCategory('5b49b0049f2ae625d844e90c',update);
    console.log(res);
}
async function testDeleteCategroy() {
  let result =  await categoryService.deleteCategroy('5b49b0049f2ae625d844e90c')
    console.log(result);
}
testDeleteCategroy()