import express from 'express'
import AdminAuthController from "../../Controllers/Admin/AuthController.js"

const router = express.Router()

router.get("/add/new/admin", AdminAuthController.addAdmin)

export default router






