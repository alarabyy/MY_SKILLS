"use strict";
// the interface is a [ contract ] that  can be used to implement the interface
Object.defineProperty(exports, "__esModule", { value: true });
var test = {
    brand: "Tesla",
    year: 2020
};
// تعريف متغير x من النوع bmw وتعيين قيمة له
var x = {
    brand: "BMW",
    drive: function () {
        console.log("Driving the BMW");
    },
    getColor: function () {
        throw new Error('Function not implemented.');
    },
    setColor: function (color) {
        throw new Error('Function not implemented.');
    },
    getBrand: function () {
        throw new Error('Function not implemented.');
    }
};
// استخدام المتغير x لطباعة العلامة التجارية وتشغيل الدالة drive
console.log(x.brand); // يجب أن يطبع "BMW"
x.drive(); // يجب أن يطبع "Driving the BMW"
var yaat = {
    brand: "BMW",
    drive: function () {
        console.log("Driving the BMW");
    },
    getEnginePower: function () {
        return 300;
    },
    setEnginePower: function (power) {
        console.log("Engine power changed to " + power);
    },
    getMileage: function () {
        return 0;
    },
    getYear: function () {
        throw new Error('Function not implemented.');
    },
    setYear: function (year) {
        throw new Error('Function not implemented.');
    },
    getColor: function () {
        throw new Error('Function not implemented.');
    },
    setColor: function (color) {
        throw new Error('Function not implemented.');
    },
    getBrand: function () {
        throw new Error('Function not implemented.');
    }
};
