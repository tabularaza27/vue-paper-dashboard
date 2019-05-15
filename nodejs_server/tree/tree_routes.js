var express = require('express');
var router = express.Router();
var treeModel = require('./tree_model')
var random = require('random')

function getYearFromDiameterWithError(x){
    value = -0.7020144 + 0.3727933*x - 0.01101245*x^2 + 0.000108522*x^3;
    value += value*25.0/100.0 * random.float(min = -1, max = 1);
    return value;
}

function getYearFromDiameter(x){
    value = -0.7020144 + 0.3727933*x - 0.01101245*x^2 + 0.000108522*x^3;
    return value;
}

function getDiameterFromYear(x){
    x
    var value =  0.6084119 + 0.5173967*x + 3.323752*Math.pow(x,2) - 0.382862*Math.pow(x,3) + 0.01219752*Math.pow(x,4);
    value += value*25.0/100.0 * random.float(min = -1, max = 1);
    return value;
}

function getAllWidth(currentWidth, age){
    age = Math.round(age)
    all_width=[]
    for(var i = 0; i < tree.age; i = i + 1){
        tree.all_width.push(parseFloat(getDiameterFromYear(i)).toPrecision(12));
    }
    all_width.push(currentWidth)
    return all_width;
}

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
    treeModel.find({id: req.params.tree_id}, function (err, trees) {
        //tree1 = JSON.parse(trees[0]);
        console.log(trees[0])
        tree = trees[0].toObject()
        console.log(trees[0])
        tree.age = Math.round(tree.age)
        tree.all_width=[]
        for(var i = 0; i < tree.age; i = i + 1){
            tree.all_width.push(parseFloat(getDiameterFromYear(i)).toPrecision(12));
        }
        tree.all_width.push(tree.dbh_cm)
        //tree.year = getYearFromDiameter(parseFloat(tree.dbh_cm))
        
        
        console.log('single tree');
        //console.log(trees);
        res.json(tree);
    });
});




module.exports = router;
