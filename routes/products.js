const { Router } = require('express');
const router = Router();

const { 
    getProducts,
    getProductById, 
    postProducts,
    updateProduct,
    deleteProduct,
    getProductsCount,
    getProductsFeature 
} = require('../controllers/products');

router.get('/', getProducts);
router.get('/:_id', getProductById);
router.post('/', postProducts);
router.put('/:_id', updateProduct);
router.delete('/:_id', deleteProduct);
router.get('/get/count', getProductsCount);
router.get('/get/feature/:count', getProductsFeature);

module.exports = router;