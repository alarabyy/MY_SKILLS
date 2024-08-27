class animals {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

class Dog extends animals {

    constructor(name, age, color, breed) {
        super(name, age, color);
        this.breed = breed;
    }
}

class elephant extends Dog{

    constructor (name, age, color, breed , size) {
        super(name, age, color, breed);
        this.size = size;
    }
}

var  eleph = new elephant("Dog", 15 , "yellow" , 2 , 44);

// console.log(elephant);

function firstoop(){
    document.body.innerHTML += 
    `<p>الاسم: ${eleph.name = prompt("enter name")}</p>
    <p>العمر: ${eleph.age = prompt("enter age")}</p>
    <p>اللون الأول: ${eleph.color = prompt("enter color")}</p>
    <p> التكاثر: ${eleph.breed = prompt("enter breed")}</p>
    <p>الحجم: ${eleph.size = prompt("enter size")}</p>
    <p>*************************************</p>`;   

}