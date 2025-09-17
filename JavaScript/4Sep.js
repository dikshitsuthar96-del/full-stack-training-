//slice
const numbers = [1,2,3,4,5,6,7,8,9,10];
const sliceOutput = numbers.slice(2,6);
console.log(numbers.slice(1));
console.log(numbers.slice(-1));
console.log(sliceOutput);
console.log(numbers);

//Splice (index,deletecount,newelement)
const evenNumber=[2,4,6,8,10,12];
const splicedOutput=evenNumber.splice(4,1);
console.log('return by splice', splicedOutput)
console.log('original array',evenNumber)

// arr=[2,3,4,5,75,65,4,4,5,6,7,54,4,4]
// const number=[2,3,4,5,75,65,4,4,5,6,7,54,4,4];

const intro =['my','name','is','Dikshit'];
console.log(intro.join('-'))

//note CONCAT
const frondend = [
    'html',
    'css',
    'js'
]
const backend = ['node','express'];
const output = frondend.concat(backend);
console.log(output)
console.log(frondend,backend);

//indexof return the index of element if exist if not return -1;
console.log(frondend.indexOf('cs'))

//Note: FLAT NESTED ARRAR FLATTEN;
const nestedArray = [1,2[3,4,[6,7],8],10];
console.log(nestedArray.flat(2))

//Note: HIGHER ORDER METHODS;
function sayHi(){
    console.log('hi')
}
function greet(callback){
    console.log('callback fn sayHi',callback)
callback()
}
greet(()=>{
    console.log('hi')
},5)

//Note: FOREACH METHODS;
const add = [1,3,5,7,9];
const forEachOutput = add.forEach((el)=>{
    console.log(el)
})

//Note: MAP*****
const nm = [2,4,6,8,10];
const mappedOutput = nm.map((el)=>{
    return el*2;
})
console.log(mappedOutput)

//Note: FILTER
const product = [
    {name:'FRIDGE',category:'electronics'},
    {name:'iphone',category:'mobile'},
    {name:'s25 ultra',category:'mobile'},];

    const filterOutput = product.filter(el=>el.category === 'mobile')
    console.log(filterOutput)

//Note: find method;
const findOutput = product.find(el=>el.category === 'mobile')
    console.log(findOutput)

//Note: FINDINDEX;
const oddNumber = [3,5,7,9];
const findIndexOutput = oddNumber.findIndex((el)=>{
    return el > 5;
}) 
console.log(findIndexOutput)   


//Note: REDUCE
const arrNum = [1,2,3,4,5,6];
const reduceOutput = arrNum.reduce((acc,el)=>{
    console.log(acc, 'iterating el',el)
    return acc * el
},0) 

