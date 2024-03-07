import express from 'express';
import bodyParser from 'body-parser';
import { cart } from '../model/index.js';

const cartRouter = express.Router();

cartRouter.get('/', (req, res) => {
    try {
        cart.fetchCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve cart items.'
        });
    }
});

cartRouter.post('/addItem', bodyParser.json(), (req, res) => {
    try {
        cart.addItem(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add item to the cart.'
        });
    }
});

cartRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        cart.updateItem(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to update cart item.'
        });
    }
});

cartRouter.delete('/remove/:id', (req, res) => {
    try {
        cart.removeItem(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to remove item from the cart.'
        });
    }
});

export {
    cartRouter
};

