const express = require('express')
const vehicleRoutes = require('./prefill').routes

const router = express.Router({mergeParams: true})
router.use('/prefill', vehicleRoutes)

module.exports = router