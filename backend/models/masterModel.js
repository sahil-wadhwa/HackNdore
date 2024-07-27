const mongoose=require('mongoose');

const masterModel= mongoose.Schema({
    supply_name:{
        type:String,
    
    },
    department:{
        type:String,
    
    },
    batch_no:{
        type:String,
    
    },
    quantity:{
        type: Number,
    },
    shelf_life:{
        type: Number,
   },
    reorder_level:{
        type: Number,
    },
    reorder_quanity:{
        type:Number,
    },
    cost:{
        type:Number,
    }

});

module.exports=mongoose.model("masterModel",masterModel);