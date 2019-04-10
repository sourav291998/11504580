var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.get('/product', function(req, res, next) {
  res.render('product');
});
router.post('/product', function(req, res, next){
  const newUser = new user({
    productid:req.body.productid,
    productname:req.body.productname,
    productdescription:req.body.productdescription,
    productquantity:req.body.productquantity,
    productprice:req.body.productprice

})
});


module.exports = router;
