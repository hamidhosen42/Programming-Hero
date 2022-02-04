// Problem No:1

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
    var vori = ana * 0.0625;
    return vori;
  }
}

// Problem No:2

function pandaCost(totalSingara, totalSamucha, totalJilapi) 
{
  var singaraPrice = 7;
  var samuchaPrice = 10;
  var jilapiPrice = 15;
  var totalCost;
  //error handling
  if (totalSingara < 0 || totalSamucha < 0 || totalJilapi < 0) 
  {
    return "Invalid Input";
  } 
  else if ( (typeof totalSingara != "number") || (typeof totalSamucha != "number") || (typeof totalJilapi != "number"))
  {
    return "Please enter a number";
  }
  else 
  {
    var totalSingaraCost = totalSingara * singaraPrice;
    var totalSamuchaCost = totalSamucha * samuchaPrice;
    var totalJilapiCost = totalJilapi * jilapiPrice;

    totalCost = totalSingaraCost + totalSamuchaCost + totalJilapiCost;

    return totalCost;
  }
}

// Problem No: 3
function picnicBudget(totalMan) 
{
  if (totalMan < 0) 
  {
    return "Invalid Input";
  } 
  else if (typeof totalMan != "number") 
  {
    return "Please enter a number";
  } 
  else 
  {
    const firt100ManPerCost = 5000;
    const second100ManPerCost = 4000;
    const third100ManPerCost = 3000;
    if (totalMan <= 100) 
    {
      const totalCost = totalMan * firt100ManPerCost;

      return totalCost;
    } 
    else if (totalMan <= 200) 
    {
      const firt100ManTotalCost = 100 * firt100ManPerCost;
      const restPicnicMan = totalMan - 100;
      const second100ManTotalCost = restPicnicMan * second100ManPerCost;
      const totalCost = firt100ManTotalCost + second100ManTotalCost;

      return totalCost;
    } 
    else 
    {
      const firt100ManTotalCost = 100 * firt100ManPerCost;
      const second100ManTotalCost = 100 * second100ManPerCost;
      const restPicnicMan = totalMan - 200;
      const third100ManTotalCost = restPicnicMan * third100ManPerCost;
      const totalCost =firt100ManTotalCost + second100ManTotalCost + third100ManTotalCost;

      return totalCost;
    }
  }
}

// Problem No:4

function oddFriend(friendName) 
{
   if (typeof friendName != "object") 
  {
    return "Please input Array list";
  } 
  else if (friendName.length < 1) 
  {
    return "Array list is empty";
  } 
  else 
  {
    for (var i = 0; i < friendName.length; i++) 
    {
      if (friendName[i].length % 2 != 0) {
        return friendName[i];
      }
    }
  }
  return "please enter odd friend name in array list";
}