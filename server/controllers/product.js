const Product = require("../model/product.js")

// get all
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find(req.query)
        return res.status(200).json(products)
    } catch (error) {
        console.log(error)
    }
}

// get one
exports.getOneProducts = async (req, res) => {
    try {
        const productsId = req.params.id
        const product = await Product.findById(productsId)
        if (!product) {
            return res.status(500).json({ msg: "No product with such id!" })
        }
        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
    }
}


// create product 
exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create({ ...req.body })
        return res.status(201).json(newProduct)
    } catch (error) {
        console.log(error)
    }
}