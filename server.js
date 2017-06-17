const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());

// Cross origin options
const corsOptions = {
  origin: '*',
  methods: ['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE', 'HEAD'],
  allowedHeaders: ['country', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'x-access-token', 'Access-Control-Allow-Origin']
};

app.use(cors(corsOptions));
app.options('*', cors());

// Routes
const trips = require('./routes/trip');
const trucks = require('./routes/truck');
const ports = require('./routes/port');
const containers = require('./routes/container');

app.use('/api/trips', trips);
app.use('/api/trucks', trucks);
app.use('/api/ports', ports);
app.use('/api/containers', containers);

const port = process.env.PORT || 1337;
app.listen(port);
console.log(port)
