//Grasshopper - Summation  summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let sum=0;
  for(let i=0;i<=num;i++){
    sum=sum+i;
  }
  return sum;
}
