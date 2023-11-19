import express from "express";
import {
    getAllProduct, 
    getProductById, 
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js"

const router = express.Router();

router.get('/product', getAllProduct);
router.get('/product/:id', getProductById);
router.post('/product', createProduct);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;