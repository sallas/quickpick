let functions = {};

functions.schema = {
	id: Number,
	endLocation: String,
	containerID: Number,
	completed: Boolean,
	truckID: Number,
	longitude: Number,
	latitude: Number
}

functions.create = (id, endLocation, containerID, completed, truckID, longitude, latitude) => ({id, endLocation, containerID, completed, truckID, longitude, latitude});

module.exports = functions;