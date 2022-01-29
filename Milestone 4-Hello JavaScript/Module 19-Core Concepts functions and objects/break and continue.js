var i=0;

while(i<10)
{
    if(i==5)
    {
        i++;
        continue;
    }
    if(i==6)
    {
        break;
    }
    console.log(i);
    i++;
}

console.log("for loop");

for(var i=0;i<10;i++)
{
    if(i==5)
    {
        continue;
    }
    if(i==7)
    {
        break;
    }
    console.log(i);
}

console.log("array");
var array=[11,12,134,44,66,43,65,454,343,54];

for(var i=0;i<array.length;i++)
{
    if(array[i]==43)
    {
        continue;
    }
    if(array[i]==65)
    {
        break;
    }
    console.log(array[i]);
}
