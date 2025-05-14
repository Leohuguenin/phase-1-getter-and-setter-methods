class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return Math.PI * (this.radius * 2);
    }
    get area() {
        return Math.PI * (this.radius * this.radius);
    }
    set diameter(d) {
        this.radius = d / 2;
    }
    set circumference(c) {
        this.diameter = c / Math.PI;
    }
    set area(a) {
        this.radius = Math.sqrt(a / Math.PI);
    }

}