import { connection as db } from "../config/index.js";

class Cart {
    fetchCarts(req, res) {
        const qry = `
            SELECT cartID,
            userID,
            productID,
            quantity,
            productPrice,
            total
            FROM Cart;
        `;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results: results,
            });
        });
    }

    fetchCart(req, res) {
        const qry = `
            SELECT cartID, 
            userID, 
            productID, 
            quantity,
            productPrice,
            total
            FROM Cart;
            
        `;
        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result: result[0],
            });
        });
    }

    addCart(req, res) {
        const qry = `
            INSERT INTO Cart
            SET ?;
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "New cart added",
            });
        });
    }

    updateCart(req, res) {
        const qry = `
            UPDATE Cart
            SET ?
            WHERE cartID = ${req.params.id};
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The cart has been updated.",
            });
        });
    }

    deleteCart(req, res) {
        const qry = `
            DELETE FROM Cart
            WHERE cartID = ${req.params.id};
        `;
        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The cart has been deleted.",
            });
        });
    }
}

export { Cart };
