const db = require('../models')
const User = db.users
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.findAll = (req, res) => {
    User.findAll()
    .then(data => {
        res.send(data)
    })
}

exports.create = async (req, res) => {
    console.log(req.body)
    // if(!req.body.fullname || !req.body.email || !req.body.password){
    //     res.status(400).send({
    //         message: "Usermust have name, email passowrd!"
    //     })
    //     return
    // }

}