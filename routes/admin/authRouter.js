import express from 'express'
import AdminAuthController from "../../Controllers/Admin/AuthController.js"

const router = express.Router()

router.post("/add/new/admin", AdminAuthController.addAdmin)

router.get("/add/new/admin", AdminAuthController.fetchAdmins)

router.post("/login", AdminAuthController.login)

export default router






