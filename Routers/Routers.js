import express from "express"
import fs from "fs"
import { solicitarColores, solicitar_color_hsl, solicitar_color_id, solicitar_color_name, solicitar_color_rgb, solicitar_combinaciones, solicitar_complemento_color_id, solicitar_complemento_color_nombre, solicitar_complemento_color_rgb } from "../Controllers/ControllerApi.js"

const router = express.Router()

router.get("/colores", solicitarColores)
router.get("/color/:id", solicitar_color_id)
router.get("/color_name/:nombre", solicitar_color_name)
router.post("/color_rgb", solicitar_color_rgb)
router.post("/color_hsl", solicitar_color_hsl)

//combinaciones
router.get("/complemento",solicitar_combinaciones)
router.get("/complemento/:id",solicitar_complemento_color_id)
router.post("/complemento_name",solicitar_complemento_color_nombre)
router.post("/complemento_rgb",solicitar_complemento_color_rgb)

export default router