const express=require('express');
const { getMaster } = require('../controllers/masterController');

const router=express.Router();

router.get('/master',getMaster);

module.exports=router;
