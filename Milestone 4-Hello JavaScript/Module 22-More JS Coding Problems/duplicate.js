var num=[12,14,12,14,15,16,17,16,17,18,19,18,20,20];

function duplicat(number)
{
    var unique=[];
    for(element of number)
    {
        if(unique.indexOf(element)==-1)
        {
            unique.push(element);
        }
    }
    return unique;
}
console.log(duplicat(num));