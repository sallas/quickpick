const router = require('express').Router();
const truck = require('../db-model/truck');
let db = require('../util/db_config');

router.get('/', (req, res) => {
	db.model('Truck', truck.schema).find({})
		.then(data => {
			res.status(200);
  		res.json(data);
		});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	db.model('Truck', truck.schema).findOne({id})
		.then(data => {
			res.status(200);
  		res.json(data);
		});
});

module.exports = router;