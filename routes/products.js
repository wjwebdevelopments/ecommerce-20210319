const { Router } = require('express');
const router = Router();

const { 
    getProducts,
    getProductById, 
    postProducts,
    updateProduct 
} = require('../controllers/products');

router.get('/', getProducts);
router.get('/:_id', getProductById);
router.post('/', postProducts);
router.put('/:_id', updateProduct);

module.exports = router;