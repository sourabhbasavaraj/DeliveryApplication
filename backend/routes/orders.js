const express = require('express');

const { body } = require('express-validator');

const orderController = require('../controllers/order');

const router = express.Router();


const Order = require('../models/order')
const User = require('../models/user');

router.get(
  '/viewDetails', orderController.viewDetails
);


router.get(
  '/viewModify/:o_id', orderController.viewModify);


router.post(
  '/placeOrder',orderController.placeOrder
);

module.exports = router;