import { connection as db } from "../config/index.js";

class Orders {
  fetchOrders(req, res) {
    const qry = `
      SELECT orderID, userID, prodID, price, Quantity, Total
      FROM Orders;
    `;

    db.query(qry, (err, results) => {
      if (err) throw err
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchOrder(req, res) {
    const qry = `
      SELECT orderID, userID, prodID, price, Quantity, Total
      FROM Orders
      WHERE orderID = ?;
    `;

    db.query(qry, [req.params.id], (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result: result[0],
      });
    });
  }

  addOrder(req, res) {
    const qry = `
      INSERT INTO Orders
      SET ?;
    `;

    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'New order was added',
      });
    });
  }

  updateOrder(req, res) {
    const qry = `
      UPDATE Orders
      SET ?
      WHERE orderID = ?;
    `;

    db.query(qry, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'Order updated',
      });
    });
  }

  deleteOrder(req, res) {
    const qry = `
      DELETE FROM Orders
      WHERE orderID = ?;
    `;

    db.query(qry, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'Order deleted',
      });
    });
  }
}
// const carts = new Carts();

export { Orders };