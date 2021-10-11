import express from 'express'
import FacilitatorAuthController from "../../Controllers/Facilitator/FacilitatorAuthController.js"
import { verifyFacilitatorToken } from '../../Middleware/auth.js'

const router = express.Router()

router.post("/add/new/admin", verifyFacilitatorToken, FacilitatorAuthController.createFacilitator)

router.post("/login", FacilitatorAuthController.login)

router.post("/logout", verifyFacilitatorToken, FacilitatorAuthController.logout)

router.post("/refresh/token/", verifyFacilitatorToken, FacilitatorAuthController.refreshToken)

export default router



