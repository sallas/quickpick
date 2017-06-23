let db = require('../util/db_config');
const truck = require('../db-model/truck');
const port = require('../db-model/port');
const container = require('../db-model/container');
const trip = require('../db-model/trip');
const containerImageBlob = require('./containerImage').getTextBlob();

const Truck = db.models.Truck;
const Port = db.models.Port;
const Container = db.models.Container;
const Trip = db.models.Trip;

new Truck(truck.create(1234, 'Farouk the Pirate', '99887766')).save()
	.then(() => new Truck(truck.create(7242, 'Scrap King', '39829214')).save())
	.then(() => new Port(port.create(1, 'Long Beach', '55.680541,12.603772')).save())
	.then(() => new Container(container.create(1, '20', 'Coal', 1, containerImageBlob)).save())
	.then(() => new Container(container.create(2, '20', 'Dangerous goods', 1, containerImageBlob)).save())
	.then(() => new Container(container.create(3, '20', 'Colombian milk powder', 1, containerImageBlob)).save())
	.then(() => new Container(container.create(4, '20', 'Nike shoes', 1, containerImageBlob)).save())
	.then(() => new Container(container.create(5, '20', 'Fidget spinners', 1, containerImageBlob)).save())
	.then(() => new Container(container.create(6, '20', 'Gold', 1, containerImageBlob)).save())
	.then(() => new Container(container.create(7, '40', '2 x Container', 1, containerImageBlob)).save())
	.then(() => new Container(container.create(8, '20', 'Bananas', 1, containerImageBlob)).save())
	.then(() => new Trip(trip.create(1, 'HOFOR A/S - Amagerværket | Kraftværksvej 37 | 2300 København S', 1, false, null, 12.626209259033203, 55.68585917730217)).save())
	.then(() => new Trip(trip.create(2, 'Langelinie | Langeliniekaj 2 | 2100 København', 2, false, null, 12.600116729736328, 55.699356353546634)).save())
	.then(() => new Trip(trip.create(3, 'Telia Parken | Per Henrik Lings Allé 2 | 2100 København', 3, false, null, 12.571535110473633, 55.70230672832675)).save())
	.then(() => new Trip(trip.create(4, 'Bispebjerg Hospital | Bispebjerg Bakke 23 | 2400 København NV', 4, false, null, 12.541751861572266, 55.71226864306213)).save())
	.then(() => new Trip(trip.create(5, 'Christiania | Bådsmandsstræde 43 | 1407 København K', 5, false, null, 12.58928771972656, 55.67835873246176)).save())
	.then(() => new Trip(trip.create(6, 'Copenhagen Zoo | Roskildevej 32 | 2000 Frederiksberg', 6, false, null, 12.521324157714844, 55.672550948546444)).save())
	.then(() => new Trip(trip.create(7, 'ARKEN Museum for Moderne Kunst | Skovvej 100 | 2635 Ishøj', 7, false, null, 12.388458251953125, 55.60686305189916)).save())
	.then(() => new Trip(trip.create(8, 'Freetrailer Danmark ApS | Sydmarken 31 | 2860 Søborg', 8, false, null, 12.482829093933105, 55.735821365990326)).save())




