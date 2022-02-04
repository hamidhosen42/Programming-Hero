function pandaCost(totalSingara, totalSamucha, totalJilapi) 
{
  var singaraPrice = 7;
  var samuchaPrice = 10;
  var jilapiPrice = 15;
  var totalCost;
  //error handling
  if ((totalSingara < 0)||(totalSamucha<0)||(totalJilapi<0)) 
  {
    return "Invalid Input";
  } 
  else if ((typeof totalSingara != "number")||(typeof totalSamucha != "number")||(typeof totalJilapi != "number"))
  {
    return "Please enter a number";
  }
  else
  {
      var totalSingaraCost=totalSingara*singaraPrice;
      var totalSamuchaCost=totalSamucha*samuchaPrice;
      var totalJilapiCost=totalJilapi*jilapiPrice;

      totalCost=totalSingaraCost+totalSamuchaCost+totalJilapiCost;

      return totalCost;
  }
}

console.log(pandaCost(5,10,5));