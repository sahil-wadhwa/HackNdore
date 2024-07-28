const express=require('express');
const { getMaster } = require('../controllers/masterController');
const {postMaster} = require('../controllers/masterController')

const router=express.Router();

router.get('/master/get',getMaster);
router.post('/master/post',postMaster);

export default router;
