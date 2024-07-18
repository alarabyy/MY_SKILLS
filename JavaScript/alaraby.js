// var my_name = "araby";

// window.onload = function () {
// document.querySelector("h1").style.color="red";
// document.querySelector("h2").style.color="yellow";

// };

// console.log("hello java script");
// window.alert("hello world");            /*  <-- اقدر اكتب من خلالها رساله ترحيب*/
// document.write("<h1>hi...<span>js</span></h1>");
// document.createElement("hi..");
// // console.error("Error");
// console.log("hello"+"world");
// console.log("hi "+ my_name);
// console.log(`hello ${my_name}`); 



// -------------------------------------------------------------------------
// let test =
// `
// <div>
// <hr style=color:red;>

// <h1>header</h1>
// <p>paragpaph<p/>
// <hr style=color:aqua;>
// <h1>header</h1>
// <h2>paragpaph<h2/>
// <hr style=color:green;> 
// <h1>header</h1>
// <p>paragpaph<p/>
// <hr style=color:blue;>

// <h1>header</h1>
// <p>paragpaph<p/>
// <hr style=color:yellow;>
// </div>

// `
// document.write(test)

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------start to for loop---------------------------------------
// -----------------------------------------------------------------------------

// function repeat(n){
//          for (let i = 0; i < n; i++) {
//             console.log(n)
//          }}
// repeat(5)

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// --------------------(- or + to get num)----------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// console.log(Number(-"-1422"));
// console.log(Number(+"-1422"));
// console.log(Number("hi"));



// var a="20";
// var s=32;
// var d=true;
// var f=false;

// console.log(+a+s+ +d+ +f);
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------metods------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// a=20;
// a+=32;
// a-=10;
// a*=20;
// a/=2;


// console.log(`"a=" ${a}`)
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------metods------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// z="-21";
// x=321;
// c=32;
// v="132";

// console.log(-z++ + -x - -c + -v++);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------metods------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// console.log(2e7)
// console.log(5e9)
// console.log(1e12)
// console.log(8e4)
// console.log(20**5)
// console.log(1**12)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_VALUE+1241452)
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------metods------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// console.log(100..toString());
// console.log(100.5552222.toFixed(2));

// console.log(parseFloat("100.5 hi"));
// console.log(parseInt("100 how"));

// console.log(isFinite(100));
// console.log(isNaN(100));

// console.log(Number.isInteger(100.45));
// console.log(Number.isInteger(10000));

// -----------------------------------------------------------------------------
// -----------------------metods------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// console.log(Math.round(12.7));

// console.log(Math.ceil(12.7));
// console.log(Math.floor(12.7));

// console.log(Math.max(10,-15,24,427));
// console.log(Math.min(10,-15,24,427));

// console.log(Math.pow(10,2));

// console.log(Math.random());

// console.log(Math.trunc(12.9));

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ----------------------test--------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// let a=1_00;
// let b=2_00.5;
// let c=1e2;
// let d=2.4;

// /*------------Rcovery min num and int*/
// console.log(Math.round(Math.min(a,b,c, d)));

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------(if and else if condition )-----------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let price=100;
// let discount=true;
// let country="usa";
// let count=35;

// if (discount==false){
//     price-=30;   
// }

// else if(country=="usa"){
//     price+=50;
// }
// else{
//     price-=90;
// }
// console.log(price)

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------------(switch)------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// let day=1;

// switch (day){

//     case 0:
//         console.log("suterday");
//     break;

//     case 1:
//         console.log("sunday");
//     break;

//     case 2:
//         console.log("monday");
//     break;
// }

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------------(array)-------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let array = ["hamo","ali","ahmed",["mona","malak"]];

// console.log(array[1]);
// console.log(array[1][2]);
// console.log(array[0][3]);
// console.log(array[4]);
// console.log(array[3][0]);
// console.log(array[3][1][4]);
// console.log(array[3][0][2]);
// console.log(array[1]="desha");
// console.log(Array.isArray(array));

// // ---------------------------------------

// console.log(array.length);

// array[array.length-1] = "mony";
// console.log(array);

// array[array.length-3] = "chery";
// console.log(array);

// // ---------------------------------------

// console.log(array.sort());
// console.log(array.reverse());

// array.slice(2);
// console.log(array)

// array.splice(0,0,"mo`omen","may");
// console.log(array)


// ------------------------(concat and join)---------------

// let myfriends = ["hamo","ali","ahmed",["mona","malak"]];
// let myfamily =["mom","dad","bro","sis"]
// let mychild =["sara","ali","hazem"]

// let namesall= myfriends.concat(mychild,myfamily)
// console.log(namesall)

// console.log(namesall.join(" | ").toUpperCase())
// console.log(namesall.join(" $ ").toUpperCase())
// console.log(namesall.join(" & ").toUpperCase())


// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------------(loop)--------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------


// for (let i=0; i<5;i++){
//     console.log(i)
// }

// ------------------

// let names=["hamo","maay","sara","mona","ali"];

// for (let i = 0; i< names.length; i++); {
//     console.log( names[i]);    
// }
// ------------------

// let namesall=[1,2,3,"hamo","maay","sara","mona","ali"];
// let namespace=[];

// for (let i = 0; i < namesall.length; i++) {
//     if (typeof namesall[i] === "string" ) {
//        namespace.push(namesall[i]);
//     }
// }
// console.log(namespace);    

// ------------------


// let vars =0;
// while (vars <10) {
//     console.log(vars);
//     vars++;
// if (vars==6) {
//     break;
// }
// }

// ------------------

// let vars =0;
//  do{
//     console.log(vars);
//     vars++;
// if (vars==2) {
//     break;
// }
// }while (vars <10)

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------------(function)----------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// function forloop(x) {
//     console.log(`"hello "${x}`);
// }

// forloop(alaraby);

// ------------------

// function ages(minyears,maxyear){

//     for(let i=minyears;i<maxyear;i++){
//         if (i==1999) {
//             continue;
//         }
//         if (i==2023) {
//             break;
//         }
// console.log(i);
//     }
// }
// ages(1992,3023);

// ------------------

// function calc(n1,n2,n3) {
//     return n1+n2-(n3)
// }
// let sums=calc(10,20,30)
// console.log(sums+50);

// ------------------

// function calc(...numbers) {
//     let result =0;
//     for (let i=0;i<numbers.length;i++){
//         result +=numbers[i];
//     }
//     return`"num: " ${result}`
// }
// console.log(calc(10,20,30,32,326,326,1,5,65,983,32))

// ---------------------

// let x = _ => 42;
// console.log(x(10));

// let z = _ => "hello";
// console.log(x(10));
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------------(map funcion)-------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let arrayy = [1,2,3,4,5,6];

// let newarray=[];

// for ( let i=0; i<arrayy.length;i++){
//     newarray.push(arrayy[i]+arrayy[i]);
// }
// console.log(newarray); 

// // -----------------------------------------------------------------------------

// let addself =arrayy.map(function (elem,index,arr) {
//     return elem+elem;
// },8)
// console.log(addself);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------------(oop_property name)-------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let user={
//     name: "arabyY",
//     num: 123546,
//     sayname: function () {
//         return (`hello ARABY`)
//     }
// };
// console.log(user.sayname());

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------------(oop_pracet_not)----------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------


// let user={
//     "name": "arabyY",
//     "num": "123546",
//     sayname: function () {
//         return (`hello ARABY`)
//     },
// };
// console.log(user["num"]);
// console.log(user["name"]);

// -----------------------------------------------------------------------------

// let nikname = "mody";

// let user={
//     name: "arabyY",
//     "mody": "hamo",
//     sayname: function () {
//         return (`hello ARABY`)
//     }
// };
// console.log(user["num"]);
// console.log(user.name);
// console.log(user.name2);
// console.log(user[nikname]);


// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------------(oop_nested object)-------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let info = {
//     name:"hami",
//     age:20,
//     adresses:{
//         one:"cairo",
//         two:"alex",
//     },
//     skills:{
//         font:["html","css","js"],
//         back:["c#","sql","asp.net"],
//     }
// }

// console.log(info.adresses.one);
// console.log(info.skills.back);


// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------------(المقارنه )-----------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------


// let ask = prompt('enter your mail:');
// let mail ='alaraby@gmail.com';

// console.log(ask == mail);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------------(اللباديل ل  if)-------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let vars=prompt('enter num');

// vars==10?
//   console.log("true1")
//   :vars==11?
//   console.log("true2")
//   :console.log("false");

// -----------------------------------------------------------------------------

// let vars=prompt('enter num');

//  let resulte = vars==10?
//  "true1"
//   :vars==11?
// "true2"
//   :"false";
//   console.log(resulte);


// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------------(nested loop)-------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let cars=["bmw","toyota","borsh","firary"];
// let years=[2019,2020,2021,2022,2023];
// let color=["yellow","red","green","blue","blak"];

// for (let i = 0; i < cars.length; i++) 
// {
//      console.log(`car: ${cars[i]}`); 

//      for (let x = 0; x < years.length; x++) 
//       {
//       console.log(`model: ${years[x]}`);
//       }
//       for (let z = 0; z < color.length; z++) 
//       {
//         console.log(`color: ${color[z]}`);
//       }
   
 
//  console.log("------------------------------------");
// }

// -----------------------------------------------------------------------------


// let cars=["bmw","toyota","borsh","firary"];
// let years=[2019,2020,2021,2022];
// let color=["yellow","red","green","blue"];

// for (let i = 0; i < cars.length; i++) 
// {
//      console.log(`car: ${cars[i]}`); 

//      for (let x = 0; x < years.length; x++) 
//       {
//       console.log(`model: ${years[x]}`);
      
//       for (let z = 0; z < color.length; z++) 
//       {
//         console.log(`color: ${color[z]}`);
//       }
   
 
//  console.log("------------------------------------");
// }
// }


// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -------------------------------------(dom)-----------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let img1=document.getElementById('img1');
// // img1.classname='hello'
// img1.src=
// console.log(img1);
// console.log(img1);
// console.log(img1.classname);
// console.log(img1.id);
// console.log(img1.src);
// console.log(img1.alt);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ----------------------------------(css)--------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------


// let x =document.getElementById('h1id');

// x.style.backgroundColor="black";
// x.style.color="yellow";
// x.style.borderLeft="2vw solid yellow ";
// x.style.padding="10vw";



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ----------------------------------(crete cards)------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------


// let languages =["html","css","js","python","c","c#","c++"];
// let stars =["5-stars","5-stars","4-stars","5-stars","5-stars","4-stars","4-stars"];

// let contener =document.createElement("div");
// document.body.appendChild(contener);
// contener.style.textAlign="center";

// function mycards(languages,stars){


//     // the element
//     let cardp= document.createElement('div');
//     let h2p= document.createElement('h2');
//     let pp= document.createElement('p');
//     let img= document.createElement('img');

//     // the text in element

//     let h2t=document.createTextNode(languages);
//     let pt=document.createTextNode(stars);
//     img.src="./background/-5206342516100679869_121.jpg";

//     h2p.appendChild(h2t);
//     pp.appendChild(pt);
    

//     // style

//     cardp.style.width="35vw";
//     cardp.style.backgroundColor="black";
//     cardp.style.color="white";
//     cardp.style.margin="0.5vw";
//     cardp.style.padding="2vw";
//     cardp.style.display="center";
//     cardp.style.transform="translate(30vw,0px)"   


//     img.style.width="100%";

//     cardp.appendChild(h2p);
//     cardp.appendChild(pp);
//     cardp.appendChild(img  );

//     contener.appendChild(cardp);

// }
// for (let i = 0; i< 4; i++) {
//     mycards(languages[i],stars [i])
    
// }
// // mycards()
// for (let i = 4; i< 7; i++) {
//     mycards(languages[i],stars [i])
    
// }

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ----------------------------------(crete event)------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let btn =document.getElementById("btn");

// btn.onclick = function () {
// document.body.style.backgroundColor ="green"; 
// }
// events();


// btn.onclick = function () {
//     console.log('hello');
// }
// -----------------------------------------------------------------------------


// let btn = document.getElementById('btn2');

// btn.addEventListener('click',function(){
//     console.log("clickhe");
// })




// let btn = document.getElementById('btn2');

// btn.addEventListener('click',function(){
//      document.body.style.backgroundColor='blue';
// })

// btn.addEventListener('click',function(){
//     btn.style.background ='blue';
// })

// btn.addEventListener('click',function(){
//     btn.style.color ='white';
// })

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ----------------------------------(pound to dollar)---------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------


// let dollar=document.getElementById("dollar");
// let pound =document.getElementById("pound");

// dollar.onkeyup=function(){
//     pound.value=dollar.value*30;
// }

// pound.onkeyup=function(){
//     dollar.value= pound.value/30;
// }

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ----------------------------------(after before append)----------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let after=document.getElementById("after");
// let before=document.getElementById("before");
// let append=document.getElementById("append");
// let moved=document.getElementById("moved");
// let block=document.getElementById("block");

// block.style.background="black";
// block.style.height="20vh"
// moved.style.color="white"

// after.onclick =function(){

//     block.after(moved);
// }
// before.onclick =function(){

//     block.before(moved);
// }
// append.onclick =function(){

//     block.append(moved);
// }

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ----------------------------------(make a nav bar)---------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// let btnclose =document.getElementById("close");
// let btnopen =document.getElementById("open");
// let lsblock =document.getElementById("lsblock");

// btnopen.onclick=function(){
//     btnopen.classList.add("hide");
//     btnclose.classList.remove("hide");
//     lsblock.classList.remove("hide");
// }
// btnclose.onclick=function(){
//     lsblock.classList.add("hide");
//     btnclose.classList.add("hide");
//     btnopen.classList.remove("hide");
// }


// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ----------------------------------(constarctor)------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// function User(id,name,salary) {
//     this.id=id;
//     this.name=name || "unknown";
//     this.salary=salary;
// }

// let getone=new User(1,"ahmed",5600);
// let gettwo=new User(2,"",7600);
// let getthree=new User(3,"hamo",12600);
// console.log(getone.id);
// console.log(getone.name);
// console.log(getone.salary);

// console.log(gettwo.id);
// console.log(gettwo.name);
// console.log(gettwo.salary);

// console.log(getthree.id);
// console.log(getthree.name);
// console.log(getthree.salary);


// console.log(getone);
// console.log(gettwo);
// console.log(getthree);
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ----------------------------------(inhertance)-------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// class User {
//     constructor(id,name){
//         this.i=id;
//         this.n=name;
//     }
//     welcome(){
//         return `welcome ${this.n}`
//     }
// }
// class Admin extends User{
//     constructor(id,name,email){
//         super(id,name);
//         this.e=email;
//     }
// }
// let adminone = new Admin(1,"hamo","215@gmail.com");
// console.log(adminone.e);
// console.log(adminone.welcome());

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ----------------------------------(encapsulation)----------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// class User{
//     #s;
//     constructor(id,name,salary){
//         this.i=id;
//         this.n=name;
//         this.#s=salary;
//     }
//     getsalary(){
//         return parseInt(this.#s);
//     }
// }
// let userone=new User(1,"hamo",5000);
// console.log(userone.getsalary());
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ----------------------------------(scrool)---------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// let btns=document.querySelector("button");

// window.onscroll = function(){
//     if (scrollY >= 800) {
//         // console.log(`scrole=${window.scrollY}`);

//         btns.style.display="block";
//     } 
//     else{
//         btns.style.display ="none"
//     }
// } 
// btns.onclick=function(){
//     window.scrollTo({
//         left:0,
//         top:0,
//     behavior:"smooth"

//     })
// }
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
const Number =[1,2,3,4];
const doubled =Number.map(function(num){
    return num*3;
});
console.log(doubled)