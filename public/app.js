import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector("#details");
const amount = document.querySelector('#amount');
const ulElement = document.querySelector('ul');
const list = new ListTemplate(ulElement);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "start");
});
// Abstraction
// abstract class Employee{
//     constructor(
//         private name: string, 
//         private age: number, 
//         private qualification: string 
//         ){}
//     abstract applyTheJob():void;
//     abstract mailCheck():void;
//     getNameAge(){
//         console.log(this.name + this.age);
//     }
//     getQualification(){
//         console.log(this.qualification);
//     }
// }
// class _employee extends Employee{
//     constructor(name: string, age: number, qualification: string){
//         super(name, age, qualification)
//     }
//     applyTheJob(){
//         console.log('Applying for web developer');
//     }
//     mailCheck(){
//         console.log('Confirm mail before interview');
//     }
// }
// Encapsulation
// class Employee {
//     constructor(private name:string, private age: number, private qualification: string ){}
//     public getInfo(){
//         console.log(`
//             Name: ${this.name},
//             Age: ${this.age},
//             Qualification: ${this.qualification}
//         `);
//     }
// }
// let employee1 = new Employee('Duy', 27, 'bachelor');
// employee1.getInfo();
// class ScutiCompany {
//     constructor(public member: number, public name: string){}
//     static getInfoEmployee(){
//         return employee1.getInfo()
//     }
// }
// Inheritence
// class Company{
//    constructor(protected name: string, protected member: number){}
//     public getInformation(){
//         console.log(`
//         Welcome ${this.name} </br>
//         We have ${this.member} member
//         `);
//     }
// }
// class ITCompany extends Company{
//   public makeWebsite(nameProject: string){
//       console.log(`We are making ${nameProject}`);
//   }
//   public makeProduct(nameProject: string){
//       console.log(`We are developing ${nameProject} for our own.`);
//   }
// }
// let Scuti = new ITCompany('Scuti', 15);
// Scuti.getInformation();
// Polymorphism
const PI = 3.14;
class Shape {
    constructor(name) { }
    Perimeter() { }
    Acreage() { }
}
class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    Perimeter() {
        let perimeter = 2 * PI * this.radius;
        console.log(`perimeter is ${perimeter}`);
    }
    Acreage() {
        let arceage = Math.sqrt(this.radius) * PI;
        console.log(`arceage is ${arceage}`);
    }
}
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
console.log(ResourceType.AUTHOR);
let arr = ['ryu', 25, true];
arr[0] = false;
console.log(arr);
