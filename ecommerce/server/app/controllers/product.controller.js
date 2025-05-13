const db = require('../models')
const Product = db.products

exports.findAll = (req, res) => {
    Product.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'Some error occured'
        })
    })
}

exports.create = (req, res) => {
    if(!req.body.name) {
        res.status(400).send({
            message: 'The name is mandatory'
        })
        return;
    }
    Product.create(req.body)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not insert the data'
        })
    })
}