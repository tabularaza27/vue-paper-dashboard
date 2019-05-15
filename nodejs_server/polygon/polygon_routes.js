var express = require('express');
var router = express.Router();
var polygonModel = require('./polygon_model')
var treeModel = require('../tree/tree_model')
var random = require('random')

/* GET bars listing. */
router.get('/', function (req, res, next) {
    
});
function getDiameterFromYear(x){
    x
    var value =  0.6084119 + 0.5173967*x + 3.323752*Math.pow(x,2) - 0.382862*Math.pow(x,3) + 0.01219752*Math.pow(x,4);
    value += value*5.0/100.0 * random.float(min = -1, max = 1);
    return value;
}
function getAllWidth(currentWidth, age){
    value_factor = 1.4;
    age = Math.round(age)
    all_width=[]
    for(var i = 0; i < 10; i = i + 1){
        if (i == age){
            all_width.push(currentWidth*value_factor)
        }
        else{
            all_width.push(parseFloat(getDiameterFromYear(i)).toPrecision(12)*value_factor);
        
        }
    }
    return all_width;
}

/* GET a bar from ID */
router.get('/:polygon_id', function (req, res, next) {
    polygonModel.find({'id': req.params.polygon_id},function (err, polygon) {
        console.log('polygon single');
        //console.log(trees);
        treeModel.find({'plot_id': req.params.polygon_id},function (err, trees) {
            //trees = trees.toObject();
            console.log('polygon single');
            //console.log(trees);
            //merge the trees into the polygon
            for (var i = 0; i < trees.length; i += 1){
                trees[i]= trees[i].toObject();
                allWidth = getAllWidth(trees[i].dbh_cm, trees[i].age)
                trees[i].all_width = allWidth
            }
            polygon1 = {
                polygon: polygon[0],
                trees :  trees
            }
            res.send(polygon1);
            
        });

    });

});

module.exports = router;
