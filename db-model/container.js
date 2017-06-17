let functions = {};

functions.schema = {
	id: Number,
	type: String,
	content: String,
	portID: Number
}

functions.create = (id, type, content, portID) => ({id, type, content, portID});

module.exports = functions;