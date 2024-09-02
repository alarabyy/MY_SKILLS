// the interface is a [ contract ] that  can be used to implement the interface

interface cars {
    brand: string;
    year: number;
    
}

var test : cars ={
    brand: "Tesla",
    year: 2020
}


import { bmw } from './tesstInterface/test';

// تعريف متغير x من النوع bmw وتعيين قيمة له
var x: bmw = {
    brand: "BMW",
    drive: function () {
        console.log("Driving the BMW");
    },
    getColor: function (): string {
        throw new Error('Function not implemented.');
    },
    setColor: function (color: string): void {
        throw new Error('Function not implemented.');
    },
    getBrand: function (): string {
        throw new Error('Function not implemented.');
    }
};

// استخدام المتغير x لطباعة العلامة التجارية وتشغيل الدالة drive
console.log(x.brand);  // يجب أن يطبع "BMW"
x.drive();  // يجب أن يطبع "Driving the BMW"


import { bmh } from './tesstInterface/test';

var yaat: bmh = {
    brand: "BMW",
    drive: function () {
        console.log("Driving the BMW");
    },
    getEnginePower: function () {
        return 300;
    },
    setEnginePower: function (power: number) {
        console.log("Engine power changed to " + power);
    },
    getMileage: function () {
        return 0;
    },
    getYear: function (): number {
        throw new Error('Function not implemented.');
    },
    setYear: function (year: number): void {
        throw new Error('Function not implemented.');
    },
    getColor: function (): string {
        throw new Error('Function not implemented.');
    },
    setColor: function (color: string): void {
        throw new Error('Function not implemented.');
    },
    getBrand: function (): string {
        throw new Error('Function not implemented.');
    }
}