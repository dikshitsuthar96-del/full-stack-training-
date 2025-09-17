//Note-create a nested switch case on the basic of country,state and city

let country = "India";
let state = "Rajasthan";
let city = "Udaipur";
switch (country) {
    case "India":
        console.log("Country: India");
        switch (state) {
            case "Rajasthan":
                console.log("State: Rajasthan");
                switch (city) {
                    case "Jaipur":
                        console.log("City: Jaipur (Pink City)");
                        break;
                    case "Udaipur":
                        console.log("City: Udaipur (City of Lakes)");
                        break;
                    default:
                        console.log("Unknown city in Rajasthan");
                        break;
                }
        }
}


// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// const arr=[1,2,3,4,5,6];
// for(Let i=0;i<Array.length;i++){
//     console.log(arr[i])
// }


//Que1.Find the sum of elements in an array.
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let num of arr) {
//   sum += num;
// }
// console.log("Sum:", sum); 

//Que2.find the maximam number in an array.
// let arr = [10, 45, 2, 8, 33];
// let maxNum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxNum) {
//     maxNum = arr[i];
//   }
// }
// console.log("Maximum:", maxNum);
//min
// let minNum =arr[0];

// for(let i = 1; i < arr.length; i++){
//     if(arr[i] < minNum){
//         minNum = arr[i];
//     }
// }
// console.log("Minimum", minNum);


//Que3.create a function to count on element accurance to an array countOccurance(arr,target);

//Que4.Create a function to print the table for given numbre till 10;

// for(Let i=1 ; i<5; i++){
//     for(Let j=1; j<5 ; j++){
//         console.log('$(i) -- $(j)')
//     }
// }

//Que5.create a loop to fill the element to an array till 20;
// let arr = [];

// for (let i = 1; i <= 20; i++) {
//   arr.push(i);
// }
// console.log(arr);


for(let i=1;i<=5;i++){
    let pattern='';
    for(let j=1;j<= i;j++){
        pattern += "*"
    }
    console.log(pattern);
}

console.log("reverse");

for(let i=5;i>=1;i--){
    let pattern='';
    for(let j=1;j<= i;j++){
        pattern += "*"
    }
    console.log(pattern);
}

console.log("pyramid");

for(let i=1;i<=5;i++){
    let pattern='';
    for(let j=1;j<=5-i;j++){
        pattern += " "
    }
    for(let j=1;j<=2*i-1;j++){
        pattern += "*"
    }
    console.log(pattern);
}


console.log(" reverse pyramid");

for(let i=5;i>=1;i--){
    let pattern='';
    for(let j=1;j<=5-i;j++){
        pattern += " "
    }
    for(let j=1;j<=2*i-1;j++){
        pattern += "*"
    }
    console.log(pattern);
}

// console.log(" while loop");

// let i = 0;
// const newArr = [1,2,3,4,5];
// while(i < newArr.length){
//     console.log(newArr);
//     i++;
// }


let j=1
do{
    console.log('j : ${j}')
    j++;
} while(j < 10)


//Note FOR OF AND 
// const product=['Mobill','tv','ac'];
// for(Let product of products){
//     console.log(product)
// }
// for(Let i in products){
//     console.log(i)
// }

// for(Let key in car){
//     console.log(key){
//         console.log('${key},${car}')
//     }
// }

const Colors=['red','blue','green'];
const pushOutput=Colors.push('white')
console.log(pushOutput);

//includes
console.log(Colors.includes('white'));
