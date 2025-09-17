//Count the number of vowels in a string.
function Vowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(Vowels("Hello World")); 

//Write a function to chech if a string is a palindrame;

//From a string like "1,2,3,4"; return the sum of numbers;
function sumFromString(str) {
  return str
    .split(",")
    .map(Number)          
    .reduce((a,b) => a + b, 0);
}
console.log(sumFromString("1,2,3,4"));



console.log([] + []);
console.log({} + {});
console.log([] + {});
console.log({} + []);
console.log(undefined + undefined);
console.log(0 === false);
console.log('s' *2);
console.log('4'/2);


//Convert a snake_case string to camelcase
function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}
console.log(snakeToCamel("hello_world"));
console.log(snakeToCamel("this_is_a_test"));

const arr = [1,2,3,4,5];
arr.map((el,index)=>{
    console.log(el,index)
})
