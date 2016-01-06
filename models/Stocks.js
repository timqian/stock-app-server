// get an instance of mongoose and mongoose.Schema
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// set up a mongoose model and export
const Stocks = mongoose.model('Stocks', new Schema({
  _id: String,
  name: String,
  tags: [ String ]
}, { _id: false })); //??

export default  Stocks;
