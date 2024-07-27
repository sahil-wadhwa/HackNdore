const masterModel=require('../models/masterModel')

exports.getMaster=async(req,res)=>{
    try{

        const {id,supply_name,department,batch_no,quantity,shelf_life,reorder_level,reorder_quantity,cost}= req.body;

        const response=await masterModel.find({});

        res.status(200).json({
            success:true,
            data:response,
            message:"Successful"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:error.message 
        })
    }
}