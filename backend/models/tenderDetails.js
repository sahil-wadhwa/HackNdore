const mongoose=require('mongoose');


const tenderDetailsModel= mongoose.Schema({
    item:{
        type:String,
        required:true,
        maxLentgh:7
    },
    price:{
        type:Number,
        required:true,
        maxLentgh:7
    },
    weight:{
        type:Number,
        required:true,
        maxLentgh:7
    },
    quantity:{
        type:Number,
        required:true,
        maxLentgh:7
    },
    base_price:{
        type:Number,
        required:true,
        maxLentgh:7
    },
    time:{
        type:Date,
        required:true,
        maxLentgh:7
    },
    file:{
        type:File,
        required:false,
    }
});

module.exports=mongoose.model('tenderDetailsModel',tenderDetailsModel);