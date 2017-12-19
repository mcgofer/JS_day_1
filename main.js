//Question 1
/*
var restaurants = ["HaAhim", "Thai House", "Cafe Italia", "M25", "Har Sinai"];
for (var number = 0; number < restaurants.length; number++)
{
  console.log(restaurants[number]);
}
*/
//Question 2
/*
var total = 0;
var numbers = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
for ( var i = 0; i < numbers.length; i++ )
{
    total += numbers[i];
    var average = total / numbers.length;
}
alert(average);
*/
//Question 3
/*
var myColor = ["Red", "Green", "White", "Black"]
  console.log(myColor.join(" + "));
*/
//Question 4
/*
function evenNums(num) 
{
    var myString = num.toString();
    var result = [myString[0]];
    for (var i = 1; i < myString.length; i++) 
    {
        if ((myString[i - 1] % 2 === 0) && (myString[i] % 2 === 0)) 
        {
            result.push('-', myString[i]);
        }
        else 
        {
            result.push(myString[i]);
        }
    }
    console.log(result.join(''));
}
*/