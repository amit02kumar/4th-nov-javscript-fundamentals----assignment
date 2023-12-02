let weight = 70; //weight in kg
let height = 1.70; //height in meters.

function bodyMassIndex(weight, height) {
    // BMI formula:weight(kg)/(height * height)
    let BMI= weight/(height*height) ;
    return BMI;
}

// Calculate BMI using the function
let result = bodyMassIndex(weight,height);

//To display the result
console.log(`weight: ${weight} kg`);
console.log(`Height: ${height} meters`);
console.log(`BMI: ${result}`);