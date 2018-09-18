require('../db')
let orderService = require('../service/order');
 async function testAddOrder() { //addOrder, getOrderByPage
    let o = {
        productId:"5b49d82a5f069218700e4481",
        count:2,
       productPrice:1
    }
    let  result = await orderService.addOrder(o);
     console.log(result);

 }

 async function testGetOrderByPage() {
    let list = await orderService.getOrderByPage(1);
     console.log(list);
 }
testGetOrderByPage()