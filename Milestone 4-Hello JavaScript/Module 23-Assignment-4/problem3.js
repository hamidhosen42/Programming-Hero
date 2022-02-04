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

console.log(picnicBudget(250));