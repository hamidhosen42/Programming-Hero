// let sum=0;
// for(let i=5;i>=1;i--)
// {
//     sum=sum+i;
// }

// console.log(sum);

function sum(i)
{
    console.log(i);
    if(i==1)
    {
        return 1;
    }
    return i+sum(--i);
}

console.log(sum(5));

// i+sum(--i);
// 5+sum(4)
// 5+4+sum(3)
// 5+4+3+sum(2)
// 5+4+3+2+1