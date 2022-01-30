// Convert Inch to Feet
var inches=132;
var feet=inches/12;

console.log(feet);

console.log("Function");
// Function
function inchToFeet(inch)
{
    var feet=inch/12;
    return feet;
}

console.log("inch to feet : ",inchToFeet(112));

// miles to kilometer
function mileToKilometer(miles)
{
    var km=miles*1.60934;
    return km;
}

console.log("miles to kilometer : ",mileToKilometer(23));