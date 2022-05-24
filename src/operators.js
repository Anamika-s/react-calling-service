
console.log("Inside js file")
const arr = [1,2,3,4,5];

for(var num in arr)
console.log(num);


let output = arr.map(x=>x);
console.log("Ouput " + output);


let evenoutput = arr.map(x=>x%2==0);
console.log(evenoutput);

// const double = function(x)
// {
//   return x*x;
// }

const double = x => x*x;

let output1 = arr.map(double);
console.log("Double" + output1);

const triple = x => x*x*x;
let output2 = arr.map(triple);
console.log(output2);


// // Filter
// LINQ
// var x = (from temp in collection)
//    select temp

console.log("Odd Values")

// for(var num in arr)

// { if(num%2==0)
//   console.log(num);
// }
output = arr.filter(IsOdd);
function IsOdd(x)
{
  return x%2;
}


function IsEven(x)
{
  return x%2==0;
}

console.log(output);

output = arr.filter(IsEven)
console.log(output);


const numbersmotethan4 =
arr.filter(function greaterthen4(x)
{
     return x>2;

})

console.log(numbersmotethan4);

// Sum of numbers

function findSum(arr)
{
  let sum=0
  for(let x = 0;x<arr.length;x++)
  sum+= arr[x];
  return sum;
}

console.log("Sum is " + findSum(arr));

function findMaxNumber(arr)
{
  let max=0
  for(let x = 0;x<arr.length;x++)
  {
  if(arr[x]>max) max = arr[x];
  
  }  return max;
}

console.log("Max Number is " +findMaxNumber(arr));

// Reduce operator

// arr.reduce()
const Sum = arr.reduce(function(sum, cur)
{
  sum= sum+ cur;
  return sum;
},0)

console.log(Sum)

const Max = arr.reduce( function(acc,cur )
{

   if(cur> acc)
  
  acc= cur;
},0)
 
// List / Collections

const users = [
 {firstName :"Ajay", lastName:"Sood" , Age:25},
 {firstName :"Vijay", lastName:"Sood" , Age:25},
 {firstName :"Jay", lastName:"Sood" , Age:20},
 {firstName :"Bijay", lastName:"Sood" , Age:38}
];

// List all names

var userList  = users.map(function(x)
  {
    console.log(x.firstName + " " + x.lastName)

  });

   
userList = users.filter(function(x)
{
   return x.Age>30;
})

console.log(userList)



var usersList = users.filter((x)=> x.Age> 30).map((x)=>x.firstName);

console.log("Users List")
console.log(usersList)

const usersGroup = users.reduce(function(acc, cur)
{
  if(acc[cur.Age])
    acc[cur.Age] = ++ acc[cur.Age]; 
    else 
    acc[cur.Age]=1;
    return acc;
},{})


console.log(usersGroup)