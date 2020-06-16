const PaintCan = function (litres_of_paint) {
  this.litres_of_paint = litres_of_paint;
}


PaintCan.prototype.empty = function () {
  return this.litres_of_paint = 0
}


PaintCan.prototype.checkIfEmpty = function () {
  if (this.litres_of_paint === 0) {
    return 'empty'
  } else {
    return 'not empty'
  }
  
}

module.exports = PaintCan