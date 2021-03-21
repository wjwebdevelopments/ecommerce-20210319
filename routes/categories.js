const { Router } = require('express');
const router = Router();

const { 
    getCategory, 
    getCategoryById,
    postCategory,
    updateCategory, 
    deleteCategory
} = require('../controllers/categories');

router.get('/', getCategory);
router.get('/:_id', getCategoryById);
router.post('/', postCategory);
router.put('/:_id', updateCategory);
router.delete('/:_id', deleteCategory);

module.exports = router;