// largest element
function largetElement(number)
{
    let max=number[0];
    for(var i=1;i<number.length;i++)
    {
        if(max<number[i])
        {
            max=number[i];
        }
    }
    return max;
}

console.log(largetElement([12,14,565,672,256]));

// smallest element
function smallElement(number) 
{
    let min = number[0];
    for (var i = 1; i < number.length; i++) {
    if (min > number[i]) {
      min = number[i];
    }
  }
  return min;
}
console.log(smallElement([12, 14, 565, 672, 256,5]));