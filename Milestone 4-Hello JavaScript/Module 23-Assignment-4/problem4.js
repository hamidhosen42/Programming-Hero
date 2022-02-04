function oddFriend(friendName)
{
    if(typeof friendName != "object")
    {
        return "Please input Array list";
    }
    else if(friendName.length<1)
    {
        return "Array list is empty";
    }
    else
    {
        for(var i=0;i<friendName.length;i++)
        {
            if((friendName[i].length)%2!=0)
            {
                return friendName[i];
            }
        }
    }
    return "please enter odd friend name in array list";
}

console.log(oddFriend(["Azad","Riad","Hamid","Moinul","Hosen"]));