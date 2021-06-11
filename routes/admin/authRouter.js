import { express } from 'express'
import AdminAuthController from "../../Controllers/Admin/AuthController"
const router = express.Router()

router.get("/add/new/admin", AdminAuthController.addAdmin)

export default router






