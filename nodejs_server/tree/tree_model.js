const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const treeSchema = new Schema({}, 'tree');

const Tree = mongoose.model('Tree',  new Schema({}), 'tree');

/*treeSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Animal').find({ type: this.type }, cb);
};*/

module.exports = Tree;