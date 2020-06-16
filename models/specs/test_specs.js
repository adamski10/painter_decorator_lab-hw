const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const PaintCan = require('../paint_can.js');

describe('Room', function () {
  
  let room;
  let paintCan;
  let paintCan1;
  let decorator;

  beforeEach(function () {
    room = new Room(20);
    paintCan = new PaintCan(5);
    paintCan1 = new PaintCan(25);
    decorator = new Decorator();
  });

  it('should have an area', function () {
    const actual = room.area;
    assert.strictEqual(actual, 20);
  })

  it('should start not painted', function () {
    const actual = room.isItPainted;
    assert.strictEqual(actual, false);
  });

  it('should be able to be painted', function () {
    room.paintRoom()
    const actual = room.isItPainted;
    assert.strictEqual(actual, true);
  })

  describe( 'PaintCan', function () {
    
    it('should have paint', function () {
      const actual = paintCan.litres_of_paint
      assert.strictEqual(actual, 5)
    });

    it('should empty the can', function () {
      paintCan.empty()
      const actual = paintCan.litres_of_paint
      assert.strictEqual(actual, 0)
    });


    it('should check if can is empty', function () {
      paintCan.empty()
      const actual = paintCan.checkIfEmpty()
      assert.strictEqual(actual, 'empty')
    });
  
  });

  describe( 'Decorator', function () {
    it('should start with empty paint stock', function () {
      const actual = decorator.paintStock
      assert.deepStrictEqual(actual, [])
    });

    it('should be able to add paint can to paint stock', function () {
      decorator.addPaint(paintCan)
      const actual = decorator.paintStock.length
      assert.deepStrictEqual(actual, 1)
    });

    it('should be able to calculate total paint stock', function () {
      decorator.addPaint(paintCan)
      decorator.addPaint(paintCan1)
      const actual = decorator.totalPaintStock()
      assert.strictEqual(actual, 30)
    });

    it('has enough paint to paint the room', function () {
      decorator.addPaint(paintCan)
      decorator.addPaint(paintCan1)
      const actual = decorator.enoughPaintToPaintRoom(room)
      assert.strictEqual(actual, true)
    })

    it('can paint room', function () {
      decorator.addPaint(paintCan)
      decorator.addPaint(paintCan1)
      const actual = decorator.canPaintRoom(room)
      assert.strictEqual(actual, true)
    })

    it('should decrease paint in stock', function () {
      decorator.addPaint(paintCan)
      decorator.addPaint(paintCan1)
      const actual = decorator.paintRoom(room)
      assert.strictEqual(actual, 10)
    })

  })

});

