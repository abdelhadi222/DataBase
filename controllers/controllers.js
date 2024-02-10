//test This In PostMan => 
import RecipeesModel from "../Model/Recipees.js"
import employeeModel from "../Model/employee.js"
export const Addrecipees = async (req,res)=>{
try {
    const {idUser,StepsOfrecipees,TitelPro,Price} = body

    let CreatRecipess = await RecipeesModel.creat({
        idUser:idUser,
        StepsOfrecipees:StepsOfrecipees,
        TitelPro:TitelPro,
        Price:Price
    })
    if(!CreatRecipess){
        return  res.json('Recipess Not Craeat Err')
    }
    return res.json('Recipess Craeat')
} catch (err) {
    console.log( "Validation Err From CreatRecipess ",err);
}

}
export const AddEmployee = async (req,res)=>{
try {
    const {NameEmployee,AgeEmployee,salary,Adr} = body

    let CreatRecipess = await RecipeesModel.creat({
        NameEmployee:NameEmployee,
        AgeEmployee:AgeEmployee,
        salary:salary,
       Adr:Adr
    })
    if(!CreatRecipess){
        return  res.json('Employee Not Craeat Err')
    }
    return res.json('Employee Craeat')
} catch (err) {
    console.log( "Validation Err From Employee",err);
}
}