import express from 'express'
import { verifyFacilitatorToken } from '../../Middleware/auth.js'
import VictimsController from "../../Controllers/Facilitator/VictimsController.js";
import ProductsController from "../../Controllers/Facilitator/ProductsController.js";
import { paginator} from "../../Controllers/Services/paginator_service.js";
import {Product} from "../../Models/Product.js";
import {Victim} from "../../Models/Victim.js";

const router = express.Router()

//------------------------------------ Victims Route -----------------------------------------------

router.post("/create/victim", verifyFacilitatorToken, VictimsController.createVictim)

router.get("/fetch/victims", paginator(Victim), VictimsController.fetchVictims)

router.get("/fetch/:victim_id/victim", verifyFacilitatorToken, VictimsController.fetchVictim)

router.put("/update/:victim_id/victim", verifyFacilitatorToken, VictimsController.updateVictim)

router.delete("/delete/:victim_id/victim", verifyFacilitatorToken, VictimsController.deleteVictim)

//------------------------------------ End Victims Route -----------------------------------------------


//------------------------------------ Products Route -----------------------------------------------

router.post("/create/product", verifyFacilitatorToken, ProductsController.createProduct)

router.get("/fetch/products", verifyFacilitatorToken, paginator(Product), ProductsController.fetchProducts)

router.get("/fetch/:product_id/product", verifyFacilitatorToken, ProductsController.fetchProduct)

router.put("/update/:product_id/product", verifyFacilitatorToken, ProductsController.updateProduct)

router.delete("/delete/:product_id/product", verifyFacilitatorToken, ProductsController.deleteProduct)

//------------------------------------ End Products Route -----------------------------------------------

export default router
