/*
chairWood=3ctf/chair
tableWood=10cft/table
bedWood=50cft/bed
*/
function woodCalculetor(chairQuantity,tableQuentity,bedQuentity)
{
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;

    const chairWoodQuantity=chairQuantity*perChairWood;
    const tableWoodQuantity=tableQuentity*perTableWood;
    const bedWoodQuantity=bedQuentity*perBedWood;

    const total = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return total;
}

console.log(woodCalculetor(2,4,5));
console.log(woodCalculetor(20,8,9));