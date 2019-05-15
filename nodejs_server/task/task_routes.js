var express = require('express');
var router = express.Router();
var taskModel = require('./task_model')

/* GET bars listing. */
router.get('/', function (req, res, next) {
    taskModel.find({},function (err, task) {
        console.log('task-list');
        //console.log(task);
        res.json(task);
    });
});

/* GET a bar from ID */
router.get('/:task_id', function (req, res, next) {
    taskModel.find({id: req.params.task_id},function (err, task) {
        console.log('task-list');
        //console.log(task);
        res.json(task);
    });
});

module.exports = router;
