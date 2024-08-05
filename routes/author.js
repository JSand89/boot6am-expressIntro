const express = require("express")

const router = express.Router()

router.get("/test",()=>{
    console.log("estamos en la ruta test")
})
router.get("/diana",()=>{
    console.log("hola Diana")
})
router.get("/eduardo",()=>{
    console.log("hola eduardo")
})

module.exports = router