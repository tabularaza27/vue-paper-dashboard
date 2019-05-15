const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const treeSchema = new Schema({}, 'tree');

const Polygon = mongoose.model('Polygon',  new Schema({}), 'polygon');

/*treeSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Animal').find({ type: this.type }, cb);
};*/

module.exports = Polygon;