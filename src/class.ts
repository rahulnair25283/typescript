export default class Point {
    constructor(public x: number, public y: number) {
    }

    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

let p1 = new Point(10, 20);
let p2 = new Point(30, 50);
let p3 = p1.add(p2);

console.log(p3);