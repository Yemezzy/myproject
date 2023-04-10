import express from  'express'
const router = express.Router()
import { authenticateUser } from '../middlewares/authenticateUser'
import { getOrderCategory, createOrderCategory, deleteOrderCategory, updateOrderCategory, getOrderCategories } from '../controllers/orders/orderCategory'
import { authenticateAdmin } from '../middlewares/authenticateAdmin'
router.get('/', authenticateUser, authenticateAdmin, getOrderCategories)
router.post('/create-order', authenticateUser, authenticateAdmin, createOrderCategory)
router.get('/single/:orderid', authenticateUser, authenticateAdmin, getOrderCategory)
router.patch('/single/:orderid', authenticateUser, authenticateAdmin, updateOrderCategory)
router.delete('/single/:orderid', authenticateUser, authenticateAdmin, deleteOrderCategory)


export default router