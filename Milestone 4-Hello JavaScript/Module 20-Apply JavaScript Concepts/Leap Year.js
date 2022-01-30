function check_leapyear(year) {

  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } 
  return false;
}

console.log("Leap year or not: ",check_leapyear(2090));
console.log("Leap year or not: ",check_leapyear(2012));