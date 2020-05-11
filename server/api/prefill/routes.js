const express = require('express')
const router = express.Router({mergeParams: true})
const { prefill } = require('../../data/dataStore')

router.route('/')
  .post(async (req, res, next) => {
    res.send(JSON.stringify(await prefill(req.body)))
  })

module.exports = router;