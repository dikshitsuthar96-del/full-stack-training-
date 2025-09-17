if(true){
    let a=10;
    const b=20;
    var c=30;
    console.log(a,b,c)
}

//Note : WINDOW OBJECT
var course ='mern'
let product ='phone'
console.log(window)

//Note : THIS KEYWORD
console.log(this.course)

//Note : IN THE OBJECT
const car={
    brand : 'honda',
    color : 'white',
    getDatails : function(){
        console.log(this)
        console.log(this.brand)
    }
}
car.getDatails();

//Note : POINTS TO THE OBJECT ITSELF
const cars = {
    brand : 'BMW',
    color : 'white',
    getDetails : () =>{
        console.log(this.brand);
        
    }
}
cars.getDetails();

console.log(b);
var b ;

//Note : HAISTING
test2();
function test2(){
    console.log('test2 function');
}

let D = 4;
console.log(D);

//window , this keyword , haisting

// DOM(Document Object Model)
console.log(document);
console.log(document.body);

// NOTE DOM manipulation (Selection,Update,remove,add)
const heading = document.getElementsByTagName('h1');
console.log(heading);

//  SELECT METHOD
console.log(heading[0]);
console.log(heading[1]);
const newHeadingDate = [...heading];
console.log(newHeadingDate);
console.log([1,2,3,4,5]);

// (2)method
const para = document.getElementsByClassName('para');
console.log(para);    

//NOTE NEXT UPDATING HREF IN ANCHOR TAG :
const anchorLink = document.getElementById('link');
//NOTE change href ;
console.dir(anchorLink)
anchorLink.href = 'https://www.blinkit.in'
anchorLink.innerText= 'Blinkit'
