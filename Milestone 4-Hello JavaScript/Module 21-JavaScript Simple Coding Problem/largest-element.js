function largetElement(num)
{
    let largest=0;
    for(let i=0;i<num.length;i++)
    {
        if(num[i]>largest)
        {
            largest=num[i];
        }
    }
    return largest;
}

const age=[12,13,14,15,16,17,18,19];
console.log(largetElement(age));