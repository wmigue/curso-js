const mongoose = require('mongoose')
const schema = mongoose.schema

const Meals = mongoose.model('Meal', new Schema({
    name: String,
    desc: String,

}))

module.exports=Meals