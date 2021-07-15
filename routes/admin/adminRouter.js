import { express } from 'express'
import AdminAuthController from "../../Controllers/Admin/AuthController"
import DistrictController from '../../Controllers/Admin/DistrictController'

const router = express.Router()

router.get("/add/new/admin", AdminAuthController.addAdmin)


//----------------------- District -----------------------------
router.get("/get/districts", DistrictController.getDistricts)
router.get("/get/{:district_id}/district", DistrictController.getADistrict)
router.get("/create/district", DistrictController.createDistrict)

export default router

