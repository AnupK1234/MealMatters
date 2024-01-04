const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.js");
const { verifyToken, verifyTokenAdmin } = require('../middlewares/verifyToken.js')

router.get('/', verifyToken, productController.getProducts);
router.get('/find/:id', verifyToken, productController.getOneProducts);
router.post('/', verifyTokenAdmin, productController.createProduct);

module.exports = router;