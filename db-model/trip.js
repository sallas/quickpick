let functions = {};

functions.schema = {
	id: Number,
	endLocation: String,
	containerID: Number,
	completed: Boolean,
	truckID: Number
}

functions.create = (id, endLocation, containerID, completed, truckID) => ({id, endLocation, containerID, completed, truckID});

module.exports = functions;