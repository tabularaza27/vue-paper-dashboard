var express = require('express');
var router = express.Router();
var polygonModel = require('./polygon_model')
var treeModel = require('../tree/tree_model')

/* GET bars listing. */
router.get('/', function (req, res, next) {
    
});

/* GET a bar from ID */
router.get('/:polygon_id', function (req, res, next) {
    polygonModel.find({'id': req.params.polygon_id},function (err, polygon) {
        console.log('polygon single');
        //console.log(trees);
        treeModel.find({'plot_id': req.params.polygon_id},function (err, trees) {
            console.log('polygon single');
            //console.log(trees);
            //merge the trees into the polygon
            polygon1 = {
                polygon: polygon[0],
                trees :  trees
            }
            res.send(polygon1);
            
        });

    });

});

module.exports = router;
