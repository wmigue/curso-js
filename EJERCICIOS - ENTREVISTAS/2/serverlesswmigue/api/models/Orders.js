const mongoose = require('mongoose')
const schema = mongoose.schema

const Orders = mongoose.model('Orders', new Schema({
    meal_id: {type: Schema.Types.ObjectId, ref: 'Meal'},
    user_id: String,

}))

module.exports=Orders