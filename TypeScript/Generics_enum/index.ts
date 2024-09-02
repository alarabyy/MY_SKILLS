//#region intro to generics 


// function number1(x: number, y: number): number {
//     return x + y;
// }
// console.log(number1(10,20));
// function number2( x :string, y :string ): string{
//     return x + y;
// } 
// console.log(number2("10","20"));

// // generic function
// function number4<t> ( x ,y ){
//     return x + y;
// }

// console.log(number4<number>(10,20));
// console.log(number4<string>("10","20"));


//#endregion

//region intro to enum

// enum Enum {
//     One,
//     Two,
//     Three,
//     Four,
//     Five
// }

// console.log(Enum.One); // 0

// enum Color {
//     red = 3 , green = 3 , blue = 3 ,
//     white = 255, black = 0, alpha = 255 , 
//     purple = 128, yellow = 255, orange = 255
// }
// switch(Color){
//     case Color : "red"
//         console.log("red");
//         break;
//     case Color : "green"
//         console.log("green");
//         break;
//     default:
//         console.log("other");
//         break;
// }

// console.log(Color.green);
//#endregion
