import express from 'express'
import FacilitatorAuthController from "../../Controllers/Facilitator/FacilitatorAuthController.js"

const router = express.Router()

router.post("/add/new/admin", FacilitatorAuthController.createAccount)

router.post("/auth/login", FacilitatorAuthController.login)

router.post("/auth/logout", FacilitatorAuthController.out)



export default router



