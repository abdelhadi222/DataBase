import mongoose from "mongoose";
let employeeModel = mongoose.Schema({
  
    NameEmployee:{
        type:String
    },
    AgeEmployee:{
      type:Number
    },
    salary:{
        type:Number
    },
    Adr:{
        type:String
    }
 
})
export default mongoose.model('employee',employeeModel)