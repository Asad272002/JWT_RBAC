const express = require ("express")
const MusicController = require ("../controllers/music.controller")




const router = express.Router();

router.post ("/upload", MusicController.createMusic)

module.exports=router;