let functions = {};

functions.schema = {
	id: Number,
	name: String,
	longlat: String
}

functions.create = (id, name, longlat) => ({id, name, longlat});

module.exports = functions;