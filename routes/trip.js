const router = require('express').Router();
const trip = require('../db-model/trip');
let db = require('../util/db_config');

router.get('/', (req, res) => {
	db.models.Trip.find({})
		.then(data => {
			res.status(200);
  		res.json(data);
		});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	db.models.Trip.findOne({id})
		.then(data => {
			res.status(200);
  		res.json(data);
		});
});

router.post('/:id/complete/', (req, res) => {
	const id = req.params.id;
	db.models.Trip.update({id}, {completed: true, truckID: null})
		.then(data => {
			res.status(200);
  		res.json(data);
		});
});

router.post('/:id/assign/', (req, res) => {
	const id = req.params.id;
	const truckID = req.body.truckID;

	db.models.Trip.update({id}, {truckID})
		.then(data => {
			res.status(200);
  		res.json(data);
		});
});


module.exports = router;