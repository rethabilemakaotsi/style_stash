import express from 'express';
import bodyParser from 'body-parser';
import { cart } from '../model/index.js';

const cartRouter = express.Router();


cartRouter.get('/', (req, res) => {
    try {
        cart.fetchCarts(req, res)
    } catch (e) {
        res.status(500).json({
            status:res.statusCode, 
            msg: 'Failed to retrieve cart items.'
        })
    }
})
cartRouter.get('/:id', (req, res) => {
    try {
        cart.fetchCarts(req, res)
    } catch (e) {
        res.status(500).json({
            status:res.statusCode, 
            msg: 'Failed to retrieve cart items.'
        })
    }
})


cartRouter.post('/addItem', bodyParser.json(), (req, res) => {
    try {
        cart.addCart(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add item to the cart.'
        })
    }
});


cartRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        cart.updateCart(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to update cart item.'
        })
    }
});


cartRouter.delete('/delete', (req, res) => {
    try {
        cart.deleteCart(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete items from the cart.'
        })
    }
})

cartRouter.delete('/delete/:id', (req, res) => {
    try {
        cart.deleteCartItem(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete specific item from the cart.'
        })
    }
});

export { cartRouter };
