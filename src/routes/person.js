let express = require('express');
let router = express.Router();

// QueryString
router.get('/person', (req, res) => {
    res.send('You have requested a person')
})

// Params property on the request object
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person ${req.params.name}`)
})

module.exports = router