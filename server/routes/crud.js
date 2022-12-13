const conn = require('../db_connection');
const connection = conn.getConnection();
connection.connect();
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    connection.query('select * from user', (err, array, fields) => {
        res.send(array);
    })
})
router.post('/new', (req, res) => {
    console.log(req.body);
    connection.query('INSERT INTO user (username, password, role) VALUES (?,?,?)', [req.body.username, req.body.password, req.body.role], (err,
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
    console.log(req.params);
    connection.query('update user set `username`=?, `password`=?, `role`=?  where `id`=?', [req.body.username, req.body.password, req.body.role, req.params], (err,
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
    console.log('req.params', req.params);
    connection.query('delete from user where id=?', +req.params.id, (err,
        results) => {
        if (err) {
            res.send({ "delete": "fail" });
        }
        else {
            console.log(`output->helloworld`, results)
            res.send({ "delete": "success" });
        }
    })
})
module.exports = router;
//oke roi