import express from 'express'
import AdminAuthController from '../../Controllers/Admin/AuthController.js'
import DistrictController from '../../Controllers/Admin/DistrictController.js'
import FacilityController from '../../Controllers/Admin/FacilityController.js'
import RegionController from '../../Controllers/Admin/RegionController.js'


const router = express.Router()


router.get("/add/new/admin", AdminAuthController.addAdmin)


//----------------------- District -----------------------------

router.get("/get/districts", DistrictController.getDistricts)

router.get("/district/:district_id/fetch", DistrictController.getDistrict)

router.post("/create/district", DistrictController.createDistrict)

router.delete("/delete/:district_id/district", DistrictController.deleteDistrict)

router.put("/update/:district_id/district", DistrictController.updateDistrict)

//----------------------- End District -----------------------------


//----------------------- Region -----------------------------

router.get("/get/regions", RegionController.getRegions)

router.get("/get/:region_id/region", RegionController.getRegion)

router.post("/create/region", RegionController.createRegion)

router.delete("/delete/:region_id/region", RegionController.deleteRegion)

router.put("/update/:region_id/region", RegionController.updateRegion)

//----------------------- End District -----------------------------


//----------------------- Facility -----------------------------

router.get("/get/facility", FacilityController.getFacilities)

router.get("/get/{:facility_id}/facility", FacilityController.getFacility)

router.post("/create/facility", FacilityController.createFacility)

router.delete("/delete/facility", FacilityController.deleteFacility)

router.put("/update/facility", FacilityController.updateFacility)

//----------------------- End Facility -----------------------------


export default router

