let pi = Math.PI;
let radius = 10;

function areaOfCircle(pi, radius) {
    // formula of area of circle is pi*(r*r).
    let area = pi* (radius * radius);
    return area;
}

let calculatedArea = areaOfCircle(pi, radius);

// To display the result
console.log(`PI: ${Math.PI}`);
console.log(`Radius : ${radius}`);
console.log(`calculated Area : ${calculatedArea}`);