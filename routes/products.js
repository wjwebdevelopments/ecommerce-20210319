const { Router } = require('express');
const router = Router();

const { 
    getProducts, 
    postProducts 
} = require('../controllers/products');

router.get('/', getProducts)
router.post('/', postProducts);

module.exports = router;