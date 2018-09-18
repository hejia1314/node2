let orderService = require('../service/order');
let router = require('express').Router();

router.get('/',async(req,res)=>{
   let orders = await orderService.getOrderByPage(req.query.page)
    res.success(orders)
})

router.post('/',async(req,res)=>{
    let  order = await orderService.addOrder(req.body)
    res.success(order)
})
module.exports = router