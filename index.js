// Your code here
class Polygon {
    constructor(arr){
        this.sides = arr;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((sum, count) => sum + count)
    }

}

class Triangle extends Polygon {
    get isValid() {
      const a = this.sides[0];
      const b = this.sides[1];
      const c = this.sides[2];
      if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
      } else {
        return true;
      }
    }
  }
  
  class Square extends Polygon {
    get area() {
      return this.sides[0] * this.sides[2]
    }
  
    get isValid() {
      return this.area > 0 && Math.sqrt(this.area) % 1 === 0;
    }
  }