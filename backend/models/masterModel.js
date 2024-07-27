const mongoose=require('mongoose');

const masterModel= mongoose.Schema({
    supply_name:{
        type:String,
        required:true,
        maxLentgh:7
    },
    department:{
        type:String,
        required:true,
        maxLentgh:7
    },
    batch_no:{
        type:String,
        required:true,
        maxLentgh:7
    },
    quantity:{
        type: Number,
        required:true,
    },
    shelf_life:{
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
    },
    cost:{
        type:Number,
        required:true
    }

});

module.exports=mongoose.model('masterModel',masterModel);