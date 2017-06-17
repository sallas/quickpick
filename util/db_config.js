const mongoose = require('mongoose');

mongoose.connect('mongodb://quickpick:quickpick@ds129462.mlab.com:29462/quickpick');
mongoose.Promise = global.Promise;

let db = mongoose.connection;
const trip = require('../db-model/trip');
const container = require('../db-model/container');
const truck = require('../db-model/truck');
const port = require('../db-model/port');

db.model('Trip', trip.schema);
db.model('Container', container.schema);
db.model('Port', port.schema);
db.model('Truck', truck.schema);

module.exports = db;