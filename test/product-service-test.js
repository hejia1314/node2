require("../db")
let productService = require('../service/product');

async function testAddProduct() {
    let product =[
            {
        name:"联想电脑i5",
        price:"1999.9",
        stock:100,
        description:"一台不会让你失望的电脑",
        category:"5b49aeffd40ce31c24812556"
    },
        {
            name:"联想电脑i700",
            price:"1999.9",
            stock:100,
            description:"一台不会让你失望的电脑",
            category:"5b49aeffd40ce31c24812556"
        },
        {
            name:"水星家纺",
            price:"1999.9",
            stock:100,
            description:"给你家的感觉",
            category:"5b49bbc34858a51aac4ce841"
        },
        {
            name:"韩国女款连衣裙",
            price:"1999.9",
            stock:100,
            description:"初恋一般的迷人",
            category:"5b49b0a88c85fd13ac7a1101"
        },


    ]
   let p = await productService.addProduct(product);
    console.log(p);
}
async function testGetProductsBypage() {
   let list = await productService.getProductsByPage(1)
    console.log(list);
}
async function testUpdateProduct() {
    await productService.updateProduct("5b49d99403b4442528f256b5",{price:"299"})
}
async function testDeleteProduct() {
    await productService.deleteProduct("5b49d99403b4442528f256b4")
}
testDeleteProduct()