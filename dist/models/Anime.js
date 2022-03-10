"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var animeSchema = new _mongoose.Schema({
  animename: {
    type: String,
    required: true,
    trim: true
  },
  japanname: {
    type: String,
    trim: true
  },
  director: {
    type: String,
    required: true,
    trim: true
  },
  songs: {
    albumname: {
      type: Array,
      required: true,
      trim: true
    },
    openingname: {
      type: Array,
      required: true,
      trim: true
    },
    author: {
      type: Array,
      required: true,
      trim: true
    }
  }
}, {
  versionKey: false,
  timestamps: true
});
animeSchema.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)("Anime", animeSchema);

exports["default"] = _default;