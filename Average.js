var nums = [1, 2, 3, 4, 5];
var totalSum = 0;
for(var i in nums) 
{
    totalSum += nums[i];
}
var numsCnt = nums.length;
var average = totalSum / numsCnt;
console.log('Average of 5 subjects is: ' + average);