let x: number = 100;
// x = '110';

console.log(x);

interface Point2D {
    x: number;
    y: number;
}

interface Point3D {
    x: number;
    y: number;
    z: number;
}

var point2D: Point2D = { x: 10, y: 10 };
var point3D: Point3D = { x: 10, y: 10, z: 10 };

const iTakePoint2D = (point: Point2D) => {
    // do something;
}

iTakePoint2D(point2D);
iTakePoint2D(point3D);
iTakePoint2D({ x: 15, y: 15 });
// iTakePoint2D({ y: 15 });