import express from 'express'
import AdminAuthController from "../../Controllers/Admin/AuthController.js"

const router = express.Router()

router.post("/add/new/admin", AdminAuthController.addAdmin)

router.get("/add/new/admin", AdminAuthController.fetchAdmins)

router.post("/login", AdminAuthController.login)

router.post("/logout", AdminAuthController.logout)

router.post("/refresh/token", AdminAuthController.refreshToken)

export default router






