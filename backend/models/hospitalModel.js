const mongoose=require('mongoose');

const hospitalModel= mongoose.Schema({
    id:{
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
    quantity:{
        type:Number,
        required:true,
        maxLentgh:7
    },
});

module.exports=mongoose.model('hospitalModel',hospitalModel);