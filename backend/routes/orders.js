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

  router.get(
    '/getPickup/:o_id', orderController.getPickupData);
  
  
router.post(
  '/placeOrder',orderController.placeOrder
);

router.post(
  '/modifyOrder',orderController.modifyOrder
);


router.post(
  '/orderPicked',orderController.orderPicked
);

router.post(
  '/orderDelivered',orderController.orderDelivered
);



router.post(
  '/orderReschedule',orderController.orderReschedule
);

module.exports = router;