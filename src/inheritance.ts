import Point from './class';
export class Point3D extends Point {
    constructor(x: number, y: number, private z: number) {
        super(x, y);
        this.z = z;
    }

    add(point: Point3D): Point3D {
        let point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

let p4 = new Point3D(10,20,30);
let p5 = new Point3D(40,50,60);
let p6 = p4.add(p5);

console.log(p6);