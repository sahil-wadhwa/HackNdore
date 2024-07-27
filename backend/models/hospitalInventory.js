const mongoose=require('mongoose');

const hospitalInventoryModel= mongoose.Schema({
    item_id:{
        type:String,
        required:true,
        maxLentgh:7
    },
    hospitalName:{
        type:String,
        required:true,
        maxLentgh:7
    },
    hospitalId:{
        type:String,
        required:true,
        maxLentgh:7
    },
    qr_link:{
        type:Number,
        required:true,
        maxLentgh:7
    },
    expiry:{
        type: Date,
        required:true,
    },
    quantity:{
        type: Number,
        required:true,
    },
    reorder_level:{
        type: Number,
        required:true,
    },
    reorder_quanity:{
        type:Number,
        required:true
    }

});

module.exports=mongoose.model('hospitalInventoryModel',hospitalInventoryModel);