let functions = {};

functions.schema = {
	id: Number,
	name: String
}

functions.create = (id, name) => ({id, name});

module.exports = functions;