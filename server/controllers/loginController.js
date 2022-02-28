const knex = require('knex')(require('../knexfile').development);
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

exports.login = (req, res) => {
    const { userName, password } = req.body;
    knex("users")
        .then(users => {
            const foundUser = users.find(user => user.username === userName);
            const isPasswordCorrect = bcrypt.compareSync(password, foundUser.password)
            if (foundUser && isPasswordCorrect) {
                const payload = {
                    id: foundUser.user_id,
                    username: foundUser.username,
                    firstName: foundUser.firstname,
                    lastName: foundUser.lastname,
                    issuedAt: Date.now()
                };
                const token = jwt.sign(payload, 'tempkey', {expiresIn: '3h'});
                res.status(200).json({
                    token
                });
            } else{
                res.status(401).json({
                    message: `Invalid username or password: + ${err}`
                })
            }
        })
        .catch(err => {
            res.status(401).json({
                message: `Invalid username or password: + ${err}`
            })
        })
}