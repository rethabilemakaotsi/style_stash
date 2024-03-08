import {connection as db} from "../config/index.js"
class Products{
    fetchProducts(req, res){
        const qry = `
        SELECT productID, 
        productName, 
        productPrice,
        imageURL,
        category,
        description
        FROM Products;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req, res){
        const qry = `
        SELECT productID, 
        productName, 
        productPrice,
        imageURL,
        category,
        description
        FROM Products
         WHERE productID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }
    addProduct(req, res) {
        const qry = `
        INSERT INTO Products
        SET ?;
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode, 
                msg: 'New product was added'
            })
        })
    }
    updateProduct(req, res) {
        const qry = `
        UPDATE Products
        SET ?
        WHERE productID = ${req.params.id};
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode, 
                msg: "The product information has been updated."
            })
        })
    }
    deleteProduct(req, res) {
        const qry = `
        DELETE FROM Products
        WHERE productID = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode, 
                msg: "The product information has been deleted."
            })
        })
    }
}
export {
    Products
}