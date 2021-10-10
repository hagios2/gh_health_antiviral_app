import express from 'express'
import AdminAuthController from '../../Controllers/Admin/AuthController.js'
import DistrictController from '../../Controllers/Admin/DistrictController.js'
import FacilityController from '../../Controllers/Admin/FacilityController.js'
import RegionController from '../../Controllers/Admin/RegionController.js'
import { verifyToken } from '../../Middleware/auth.js'


const router = express.Router()


router.get("/add/new/admin", verifyToken, AdminAuthController.addAdmin)


//----------------------- District -----------------------------

router.get("/get/districts", verifyToken, DistrictController.getDistricts)

router.get("/district/:district_id/fetch", verifyToken, DistrictController.getDistrict)

router.post("/create/district", verifyToken, DistrictController.createDistrict)

router.delete("/delete/:district_id/district", verifyToken, DistrictController.deleteDistrict)

router.put("/update/:district_id/district", verifyToken, DistrictController.updateDistrict)

//----------------------- End District -----------------------------


//----------------------- Region -----------------------------

router.get("/get/regions", verifyToken, RegionController.getRegions)

router.get("/get/:region_id/region", verifyToken, RegionController.getRegion)

router.post("/create/region", verifyToken, RegionController.createRegion)

router.delete("/delete/:region_id/region", verifyToken, RegionController.deleteRegion)

router.put("/update/:region_id/region", verifyToken, RegionController.updateRegion)

//----------------------- End District -----------------------------


//----------------------- Facility -----------------------------

router.get("/get/facilities", verifyToken, FacilityController.getFacilities)

router.get("/get/:facility_id/facility", verifyToken, FacilityController.getFacility)

router.post("/create/facility", verifyToken, FacilityController.createFacility)

router.delete("/delete/:facility_id/facility", verifyToken, FacilityController.deleteFacility)

router.put("/update/:facility_id/facility", verifyToken, FacilityController.updateFacility)

//----------------------- End Facility -----------------------------


export default router

