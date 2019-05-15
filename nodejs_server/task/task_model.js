const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const taskSchema = new Schema({}, 'task');

const Task = mongoose.model('Task',  new Schema({}), 'task');

/*taskSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Animal').find({ type: this.type }, cb);
};*/

module.exports = Task;