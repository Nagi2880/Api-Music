"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

//Only start the app
//Import the database file to start it
//Import 
_app["default"].listen(_app["default"].get('port'));

console.log('server on port', _app["default"].get('port'));