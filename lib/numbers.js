'use strict'

// from http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
exports.isNumeric = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
exports.round = function(n) {
    return Math.round(n * 100) / 100
}
