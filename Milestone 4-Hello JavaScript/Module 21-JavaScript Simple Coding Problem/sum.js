var nums = [23, 54, 1, 3, 54, 76, 45];

var sum = 0;
for (var i = 0; i < nums.length; i++) {
  var element = nums[i];
  sum = sum + element;
}
console.log("the total is: ", sum);

function arrayTotal(number)
{
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
      var element = number[i];
      sum = sum + element;
    }
    return sum;
}

const total = arrayTotal([23, 54, 1, 3, 54, 76, 45]);
console.log(total);