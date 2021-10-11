import express from 'express'
import FacilitatorAuthController from "../../Controllers/Facilitator/FacilitatorAuthController.js"
import { verifyFacilitatorToken } from '../../Middleware/auth.js'
import VictimsController from "../../Controllers/Facilitator/VictimsController";

const router = express.Router()

//------------------------------------ Victims Route -----------------------------------------------

router.post("victim/create", verifyFacilitatorToken, VictimsController.createVictim)

router.get("/fetch/victims", VictimsController.fetchVictims)

router.get("/fetch/:victim_id/victim", verifyFacilitatorToken, VictimsController.fetchVictim)

router.put("/update/:victim_id/victim", verifyFacilitatorToken, VictimsController.updateVictim)

router.delete("/delete/:victim_id/victim", verifyFacilitatorToken, VictimsController.deleteVictim)

//------------------------------------ End Victims Route -----------------------------------------------

export default router
