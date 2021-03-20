const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('natus3')
})

router.post('/', (req, res)=>{
    const userKey = req.body.key
    if (userKey === process.env.lvel4key) {
        res.redirect('/opt8io0')
    }else{
        res.redirect('/natus3')
    }
})

module.exports = router