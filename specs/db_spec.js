const should = require('should');
let db = require('../util/db_config');

describe('mongo db', () => {
	it('can connect to db', (done) => {

		db.once('open', function() {
		  done();
		});

	});

	it('can create a model', () => {

		let Cat = db.model('Cat', { name: String });

		let kitty = new Cat({ name: 'Zildjian' });
		kitty.save().should.eventually.eql('hiii');

	});


});
