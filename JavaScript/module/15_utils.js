// first pattern for named export
export const pi = 3.14 ;
export const firstname = 'test';

//NOTE second pattern for named export
const college ='techno' ;
const product = 'mobile';

export {college, product}

console.log(pi)
// export default function test(){
//     console.log('hello')
// }
function demo(){
    console.log('demo')
}

export default demo

// {
//     pi : 3.14 ,
//     firstname : 'test'
// }