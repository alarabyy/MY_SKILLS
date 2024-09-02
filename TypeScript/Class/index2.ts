class test2 extends test1{
    public age : number;
    constructor(name: string, age: number){
        super(name);
        this.age = age;
    }
}

let t2 = new test2("John Doe", 30);

console.log(t2.name + " : " + t2.age);