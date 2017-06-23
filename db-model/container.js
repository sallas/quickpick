let functions = {};

functions.schema = {
	id: Number,
	type: String,
	content: String,
	portID: Number,
	img: String
}

functions.create = (id, type, content, portID, img) => ({id, type, content, portID, img});

module.exports = functions;