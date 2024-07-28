import mongoose from 'mongoose';

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

 export default mongoose.model("masterModel",masterModel);