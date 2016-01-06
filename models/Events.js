// get an instance of mongoose and mongoose.Schema
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// set up a mongoose model and export
const Events = mongoose.model('Events', new Schema({
  stockId: String,
  start_date: {
    year: String,
    month: String,
    day: String
  },
  end_date: {
    year: String,
    month: String,
    day: String
  },
  text: {
    headline: String,
    text: String
  },
  group: String
}));

export default  Events;
