let num1=prompt("enter the number");
let num2=prompt("enter the divider");
document.write(`Number 1 = ${num1} <br>`);
document.write(`Number 1 = ${num2} <br>`);
let operator=(num1,num2)=>{
  let ans=num1/num2
  document.write(`operation : ${num1} / ${num2} <br>`)
  return ans
}
// let ans=operator(num1,num2)
// document.write(`Answer = ${ans}`); 
let divide=(a,b,ans)=>{
  document.write(`Answer = ${ans(a,b)}`);
}

divide(num1,num2,operator)

