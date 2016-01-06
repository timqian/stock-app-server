// get an instance of mongoose and mongoose.Schema
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// set up a mongoose model and export
const BigMoneys = mongoose.model('BigMoneys', new Schema({
  stockId: String,
  riqi: String, // 日期
  shoupanjia: Number, // 收盘价
  zhangdiefu: String, // 涨跌幅
  zhuliliuru: String, // 主力流入
  zhanbi: String // 占比
}));

export default  BigMoneys;
