function anaToVori(ana) 
{
  //error handling
  if (ana < 0) 
  {
    return "Invalid Input";
  } 
  else if (typeof ana != "number") 
  {
    return "Please enter a number";
  } 
  else 
  {
    // 1 Aana = 1 × 0.0625 = 0.0625 Vori
    var vori=ana*0.0625;
    return vori;
  }
}

console.log(anaToVori(32));