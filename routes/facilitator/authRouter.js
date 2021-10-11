import express from 'express'
import FacilitatorAuthController from "../../Controllers/Facilitator/FacilitatorAuthController.js"

const router = express.Router()

router.post("/add/new/admin", FacilitatorAuthController.createFacilitator)

router.post("/login", FacilitatorAuthController.login)

router.post("/auth/logout", FacilitatorAuthController.logout)

router.post("/auth/logout", FacilitatorAuthController.refreshToken)

export default router



