/**
 * Created by hama on 2017/10/23.
 */
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var produtSchema = new Schema({
    "productId":{type:String},
    "productName":String,
    "salePrice":Number,
    "checked":String,
    "productNum":Number,
    "productImage":String,
    "productUrl" : String
});
module.exports = mongoose.model('Good',produtSchema);
