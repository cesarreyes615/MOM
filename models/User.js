var mongoose = require('mongoose');
var purchaseSchema = new mongoose.Schema({
	purchase_name:{
		type: String,
		required: true
	},
	cost:{
		type: String,
		required: true
	}
});
var userSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	date:{
		type: Date,
		default: Date.now
	},
	income:{
		type: Number,
		default: 0
	},
	purchases:[{purchase_name: String, cost: Number
	}],
	expenditures:[{expenditure_name: String, cost: Number
	}],
	savings:[{savings_goal: String, cost: Number, deadline: String
	}]
});

var User = mongoose.model('User', userSchema);
var Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports ={User, Purchase};