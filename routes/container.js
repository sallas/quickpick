const router = require('express').Router();
const container = require('../db-model/container');
let db = require('../util/db_config');

router.get('/', (req, res) => {
	db.models.Container.find({})
		.then(data => {
			res.status(200);
  		res.json(data);
		});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	db.models.Container.findOne({id})
		.then(data => {
			res.status(200);
  		res.json(data);
		});
});

module.exports = router;