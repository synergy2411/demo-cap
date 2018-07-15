//Destructuring : Arrays & Objects
// var arr = ["foo","bar","bam"];
// var [arr1,  arr3] = arr; 
// console.log(arr3);          //

// var myObject = {
//     drawCircle : function(r){
//         console.log(Math.PI * r * r)
//     },
//     drawText : function(text){console.log("Drawing "+ text)},
//     drawSquare : function(w,l){console.log(2 * w* l )}
// }
// var { drawSquare, drawText }  = myObject;
// drawText("Sample text");

//template string syntax
    // - include the varialble in string
    // - Multiline strings
    var fname = "Foo";
    console.log(`Hello 
    
    
    ${fname}!!!`);

//block scoping
    //-let & const

    // function demo(arr){
    //     if(arr.length>2){
    //         let load = "LOADING";
    //         console.log(flash);
    //     }else{
    //         let flash = "FLASHING"
    //     }
    // }
   // demo(["foo","bar","bam"])

    // function mystry(){
    //     var chooseNumber = function  (){
    //         return 7;
    //     }
    //     return chooseNumber();
    //     var chooseNumber = function  (){
    //         return 12;
    //     }
    // }
    // console.log(mystry());          //?

    //Spread & Rest Operator (...)

//     function demo(xyz, ...params){
//         console.log(params[1]);         //bar
//     }
//     demo("foo","bar","bam");
//    // demo("foo","bar");

//    let arr = [2,3,4];
//    let newArr = [1,...arr,5,6];
//     console.log(newArr);        //?

//Arrow Functions
// let arr = [2,3,4,5];
// // let newArr = arr.map(function(v){
// //     return v * 2;
// // })
// let newArr = arr.map(v=>v*2);
// console.log(newArr);

// let obj = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         //return this.firstName + " " + this.lastName;
//        // console.log(this);          //obj
//        //var that = this;
//        return ()=>{
//            this.firstName +  " " + this.lastName;
//        }
//         // function nestFunc(){
//         //     console.log(this);  //?
//         //     return that.firstName + " " + that.lastName;
//         // }
//         // return nestFunc();
//     }
// }
// console.log(obj.getFullName());     //

// import { Student , MAGIC_NUMBER } from './student';
// import { Person } from './person';

// let obj : Person = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 32
// }
// let foo = new Student(obj);
// console.log(foo.sayHello());

class Foo{}
class Bar{}
class Bam{
    constructor( foo : Foo, bar : Bar){
        let foo1 = new Foo();
    }
}


//npm install @angular/cli@1.7 -g

//npm install -g typescript
