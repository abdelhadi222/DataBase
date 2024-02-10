import express from "express"
import { Addrecipees  , AddEmployee} from "../controllers/controllers"
const Router = express.Router()


Router.post('/Addrecipees',Addrecipees)
Router.post('/Addrecipees',AddEmployee)

export default Router