const Room = require("./room")

const Decorator = function () {
  this.paintStock = []
}

Decorator.prototype.addPaint = function(can) {
  this.paintStock.push(can)
}

Decorator.prototype.totalPaintStock = function () {
  
  let total = 0

  for (let paintCan of this.paintStock){
    total += paintCan.litres_of_paint ;
  }
  return total
}

Decorator.prototype.enoughPaintToPaintRoom = function (room) {
  
  if (room.area <= this.totalPaintStock()) {
    return true
  } else {
    return false
  }

}

Decorator.prototype.canPaintRoom = function (room) {
  if (this.enoughPaintToPaintRoom(room) === true) {
    return room.paintRoom()
  }
}

Decorator.prototype.paintRoom = function (room) {
  if (this.enoughPaintToPaintRoom(room) === true) {
    for (paintCan of this.paintStock ) {
      
    }
  }
}
module.exports = Decorator