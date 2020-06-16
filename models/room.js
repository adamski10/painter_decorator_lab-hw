const Room = function (area) {
  this.area = area;
  this.isItPainted = false
}

Room.prototype.paintRoom = function () {
  return this.isItPainted = true
}

module.exports = Room;