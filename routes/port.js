const router = require('express').Router();
const port = require('../db-model/port');
let db = require('../util/db_config');

router.get('/', (req, res) => {
	db.model('Port', port.schema).find({})
		.then(data => {
			res.status(200);
  		res.json(data);
		});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	db.model('Port', port.schema).findOne({id})
		.then(data => {
			res.status(200);
  		res.json(data);
		});
});

module.exports = router;