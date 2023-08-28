let express = require('express');
let router = express.Router();

// QueryString => query property on the request object
// localhost:3000/person?name=Sato&age=20
router.get('/person', (req, res) => {
    if(req.query.name) {
        res.send(`You have requested a person ${req.query.name} by QueryString`)
    }
    else
    {
        res.send('You have requested a person')
    }
})

// Params property on the request object
// localhost:3000/person/Sato
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person ${req.params.name} by Params`)
})

router.get('/error', (req, res) => {
    throw new Error('This is a forced error.');
})
module.exports = router