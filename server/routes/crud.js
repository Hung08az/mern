// const conn = require('../db_connection');
// const connection = conn.getConnection();
// connection.connect();
const express = require('express');
const router = express.Router();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud', 'buzz', 'buzzdaika', {
    host: '45.32.63.28',
    dialect: 'mysql'
});
const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connect();

const users = await user.findAll();
console.log(users.every(user => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));

router.get('/', (req, res) => {
    connection.query('select * from `user`', (err, array, fields) => {
        res.send(array);
    })
})
router.get('/:id', (req, res) => {
    connection.query('select * from user where `id`=?', +req.params.id, (err, array, fields) => {
        res.send(array);
    })
})
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    connection.query('select * from user where `username`=? and `password`=?', [username, password], (err,
        results) => {
        console.log("result", results)
        if (results.length === 0) {
            res.send({ "status": 404 });
        }
        else {
            res.send(results[0]);
        }
    })
})
router.post('/new', (req, res) => {
    const { name, username, password, email, phone, zipcode, city, role } = req.body;
    connection.query('INSERT INTO user (name, username, password,email, phone, zipcode, city, role) VALUES (?,?,?,?,?,?,?,?)', [name, username, password, email, phone, zipcode, city, role], (err,
        results) => {
        if (err) {
            res.send({ "insert": "fail" });
        }
        else {
            res.send({ "insert": "success" });
        }
    })
})
router.put('/update/:id', (req, res) => {
    const { name, username, password, email, phone, zipcode, city, role } = req.body;
    const { id } = req.params;
    connection.query('update user set `name`=?, `username`=?, `password`=?, `email`=?, `phone`=?, `zipcode`=?, `city`=?, `role`=?  where `id`=?', [name, username, password, email, phone, zipcode, city, role, id], (err,
        results) => {
        if (err) {
            res.send({ "update": "fail" });
        }
        else {
            res.send({ "update": "success" });
        }
    })
})
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    connection.query('delete from user where id=?', +id, (err,
        results) => {
        if (err) {
            res.send({ "delete": "fail" });
        }
        else {
            res.send({ "delete": "success" });
        }
    })
})
module.exports = router;
//oke roi