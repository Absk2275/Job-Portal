const mongoose = require("mongoose");

const Connection = async () =>{
    try{
        await mongoose.connect("mongodb+srv://crudoperation:peecee@cluster0.ybvfjue.mongodb.net/?retryWrites=true&w=majority");
        console.log("Db connection Success");
    }
    catch(e){

        console.log("Failed to connect", e);
    }
}

module.exports = Connection;



