import express from "express"
import router from "./Routers/Routers.js"
import fs from "fs"

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 4000

app.use("/api_colors", router)

app.listen(PORT, () => {
    console.log(`Servidor conectado ${PORT}`)
})



