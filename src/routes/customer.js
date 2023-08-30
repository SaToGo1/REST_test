let CustomerModel = require('../models/customer.model')
let express = require('express')
let router = express.Router()

// Create a new customer
router.post('/customer', (req, res) => {
    // req.body -> body Parser.
    if(!req.body) {
        return res.status(400).send('Request body is missing')
    }

    // let user = {
    //     name: 'firstname lastname',
    //     email: 'email@gmail.com'
    // }

    let model = new CustomerModel(req.body)
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }

            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router