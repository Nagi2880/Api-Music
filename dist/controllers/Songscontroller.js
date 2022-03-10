"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAnime = exports.findOneAnime = exports.findAllAnimes = exports.deleteAnime = exports.createAnime = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Anime = _interopRequireDefault(require("../models/Anime"));

var _getPagination2 = require("../libs/getPagination");

var findAllAnimes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, animename, condition, _getPagination, limit, offset, Animes;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$query = req.query, size = _req$query.size, page = _req$query.page, animename = _req$query.animename; //Search in the route, a anime by your name

            condition = title ? {
              animename: {
                $regrex: new RegExp(title),
                $options: "i"
              }
            } : {};
            _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
            _context.next = 5;
            return _Anime["default"].paginate({
              condition: condition
            }, {
              offset: offset,
              limit: limit
            });

          case 5:
            Animes = _context.sent;
            res.json(Animes);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function findAllAnimes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.findAllAnimes = findAllAnimes;

var createAnime = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newAnime, animeSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            newAnime = new _Anime["default"]({
              animename: req.body.animename,
              japanname: req.body.japanname,
              director: req.body.director,
              songs: req.body.songs
            });
            _context2.next = 3;
            return newAnime.save();

          case 3:
            animeSaved = _context2.sent;
            res.json(animeSaved);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createAnime(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createAnime = createAnime;

var findOneAnime = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var anime;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Anime["default"].findById(req.params.id);

          case 2:
            anime = _context3.sent;
            res.json(anime);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function findOneAnime(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.findOneAnime = findOneAnime;

var deleteAnime = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Anime["default"].findByIdAndDelete(req.params.id);

          case 2:
            data = _context4.sent;
            res.json({
              message: "".concat(data.id, " Anime was deleted")
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteAnime(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteAnime = deleteAnime;

var updateAnime = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var updatedAnime;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Anime["default"].findByIdAndUpdate(req.params.id, req.body);

          case 2:
            updatedAnime = _context5.sent;
            res.json({
              message: "Anime was updated or Song has been added succesfully"
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateAnime(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateAnime = updateAnime;