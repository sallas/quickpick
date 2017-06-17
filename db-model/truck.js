let functions = {};

functions.schema = {
	id: Number,
	personName: String,
	phoneNumber: String
}

functions.create = (id, personName, phoneNumber) => ({id, personName, phoneNumber});

module.exports = functions;