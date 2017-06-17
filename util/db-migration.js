let db = require('../util/db_config');
const truck = require('../db-model/truck');
const port = require('../db-model/port');
const container = require('../db-model/container');
const trip = require('../db-model/trip');

const Truck = db.models.Truck;
const Port = db.models.Port;
const Container = db.models.Container;
const Trip = db.models.Trip;

new Trip(trip.create(1, 'Crw Warehouse & Distribution - 20500 S Alameda StLong Beach, CA 90810', 1, false, null)).save()
	.then(() => new Trip(trip.create(2, 'Crw Warehouse & Distribution - 20500 S Alameda StLong Beach, CA 90810', 2, false, null)).save())
	.then(() => new Trip(trip.create(3, 'Crw Warehouse & Distribution - 20500 S Alameda StLong Beach, CA 90810', 3, false, null)).save())
	.then(() => new Trip(trip.create(4, 'Crw Warehouse & Distribution - 20500 S Alameda StLong Beach, CA 90810', 4, false, null)).save())
	.then(() => new Trip(trip.create(5, 'Materials Distribution Inc - 10543 Humbolt StLos Alamitos, CA 90720', 5, false, null)).save())
	.then(() => new Trip(trip.create(6, 'Materials Distribution Inc - 10543 Humbolt StLos Alamitos, CA 90720', 6, false, null)).save())
	.then(() => new Trip(trip.create(7, 'Materials Distribution Inc - 10543 Humbolt StLos Alamitos, CA 90720', 7, false, null)).save())
	.then(() => new Trip(trip.create(8, 'Materials Distribution Inc - 10543 Humbolt StLos Alamitos, CA 90720', 8, false, null)).save())
