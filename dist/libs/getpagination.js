"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPagination = void 0;

// Create a limit for the route petition if i set size 3, in the route
// i have to write in the end 'size= "the number here without "" "'
var getPagination = function getPagination(page, size) {
  var limit = size ? +size : 3;
  var offset = page ? page * limit : 0;
  return {
    limit: limit,
    offset: offset
  };
};

exports.getPagination = getPagination;