const express = require('express')

const router = express.Router()

router.route("/:name")
    .get((req, res)=>{
        res.json({name:req.params.name, lname:'Balita'})
    })

module.exports = router