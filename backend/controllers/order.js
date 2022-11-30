const { validationResult } = require('express-validator');


const jwt = require('jsonwebtoken');


const User = require('../models/user');
const OrderDetails = require('../models/order');

exports.viewDetails = async (req, res, next)=> {};

exports.viewModify = async (req, res, next)=> {

  const o_id = req.params.o_id;

  console.log(o_id);
  console.log("now calling");

  try{
    
    const [details_order] =  await OrderDetails.viewModify(o_id);

    
    res.status(200).json(details_order);
  }
  catch (err){
    if(!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};


exports.placeOrder = async (req, res, next)=> {


  console.log("inside place order controller");

  console.log(req.body);

  const o_id = req.body.o_id;
  const fAdd = req.body.fAdd;
  const fCity = req.body.fCity;
  const fZip = req.body.fZip;
  const dAdd = req.body.dAdd;
  const dCity = req.body.dCity;
  const dZip = req.body.dZip;
  const top =  req.body.top;
  const fName = req.body.fName;
  const dName = req.body.dName;
  const dstate = req.body.dstate;
  const fstate = req.body.fstate;
  const fmobile = req.body.fmobile;
  const dmobile = req.body.dmobile;
  const uId = req.body.uId;
  const pDate =  req.body.pDate;
  const o_status = req.body.o_status;
  const dDate = req.body.dDate;
  const sp = req.body.o_status;

  

  try {
    
    const order = {
      o_id :o_id,
      fAdd : fAdd,
      fCity : fCity,
      fZip :fZip,
      dAdd :dAdd,
      dCity :dCity,
      dZip :dZip,
      top : top,
      fName : fName,
      dName : dName,
      fstate : fstate,
      dstate : dstate,
      fmobile : fmobile,
      dmobile : dmobile
    }



    console.log(order);
    console.log("inside contorller");
    const result = await OrderDetails.placeOrder(order,uId, o_status, pDate,dDate,sp);
    console.log(result);

    console.log(uId);
    console.log(o_status);
    console.log(pDate);
    console.log(dDate);

   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};