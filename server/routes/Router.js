const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Order = mongoose.model("orders");
const Items = mongoose.model("items");
const ConfirmedOrders = mongoose.model("confirmedOrders");

router.post("/placeOrder", (req, res) => {
  const { orderNo, purchaseDate, customerName, totalAmount } = req.body;
  console.log(req.body);
  if (orderNo) {
    const order = new Order({
      orderNo: orderNo,
      purchaseDate: purchaseDate,
      customerName: customerName,
      totalAmount: totalAmount,
    });

    try {
      order.save().then(() => {
        res.send({ message: "Order placed successfully...." });
      });
    } catch (error) {
      res.send({ error: error });
    }
  }
});

router.post("/addItems", async (req, res) => {
  console.log(req.body);
  const { itemName, itemPrice } = req.body;
  const items = new Items({
    itemName: itemName,
    itemPrice: itemPrice,
  });

  try {
    await items.save().then(() => {
      res.send({ message: "Items added successfully...." });
    });
  } catch (error) {
    res.send({ error: error });
  }
});

router.get("/getItems", async (req, res) => {
  const itemData = await Items.find({});
  if (itemData) {
    res.send({ data: itemData });
  } else {
    res.send({ error: "No items in a database" });
  }
});

router.post("/saveItem", (req, res) => {
  const {
    itemName,
    quantity,
    pricePerUnit,
    totalPrice,
    orderNo,
    purchaseDate,
    customerName,
  } = req.body;

  const order = new ConfirmedOrders({
    itemName,
    quantity,
    pricePerUnit,
    totalPrice,
    orderNo,
    purchaseDate,
    customerName
  })

  try {
    order
    .save()
    .then(() => {
      res.send({message: 'Order placed successfully....'});
    })
  } catch(error) {
    res.send({error: error.message});
  }
});

router.get('/getOrders', async(req, res) => {
  const orders = await ConfirmedOrders.find({});
  if(orders) {
    res.send({data: orders});
  } else {
    res.send({error: 'no order found'});
  }
})

module.exports = router;
