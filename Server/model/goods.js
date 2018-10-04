var mongoose = require("../mong/mongo.js"),
Schema = mongoose.Schema;
	var GoodsSchema = new Schema({
		gooodsname : {type: String },
		price : {type: Number },
		gooodsimg: {type: String },
		type : {type: Number },
		offten : {type: Number }
	});
module.exports = mongoose.model("Good",GoodsSchema)