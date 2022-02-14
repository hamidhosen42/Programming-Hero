function addNumber(num1,num2)
{
    // console.log(arguments);
    // console.log(arguments[4])

    let result=0;
    for(const num of arguments)
    {
        result=result+num;
    }
    // const result=num1+num2;
    return result;
}

const sum=addNumber(23,14,15,34,66);
console.log(sum);

function getFullName(name1,name2)
{
    let fullName='';
    for(const part of arguments)
    {
        fullName=fullName+part+' ';
    }
    return fullName;
}

const name = getFullName(
  "Omuk",
  "Songket",
  "bin",
  "Hanif",
  "Songket",
  "bin",
  "Tomuk",
  "Songket",
  "bin",
  "Kumuk",
  "Songket"
);
console.log(name);