var express = require('express');
var router = express.Router();
var treeModel = require('./tree_model')

/* GET bars listing. */
router.get('/', function (req, res, next) {
    treeModel.find({},function (err, trees) {
        console.log('trees-list');
        //console.log(trees);
        res.json(trees);
    });
});

/* GET a bar from ID */
router.get('/:tree_id', function (req, res, next) {
    //return the tree with id = tree_id
    res.json('') 
});

module.exports = router;
