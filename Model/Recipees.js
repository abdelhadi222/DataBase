import mongoose from "mongoose";
let RecipeesModel = mongoose.Schema({
  
    idUser:{
        type:String
    },
    StepsOfrecipees:{
      type:Array[String]
    },
    TitelPro:{
        type:String
    },
    Price:{
        type:Number
    }
 
})
export default mongoose.model('Recipess',RecipessModel)