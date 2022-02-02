var name="My name is Md.Hamid Hosen";

function reverseString(text)
{
    let reverse="";
    for( letter of text)
    {
        reverse=letter+reverse;
    }
    return reverse;
}
console.log(reverseString(name));