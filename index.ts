// Basic types 
let str: string = 'Hello Typescript';
let num: number = 42;
let isActive: boolean = false;

// for arrays 2 variants
let strArray: string[] = ['h', 'i'];
let numArray: Array<number> = [1, 1, 2, 3];

// Functions: 

// Void should eb added for the functions which do not return anything
function logInfo(name: string, age: number): void {
  console.log(`I nfo: ${name}, ${age}`); 
};

// Number concerning the function is the type of the returning value by the function
function calc(a: number, b: number | string): number {
  if (typeof b === 'string') b = +b;
  return a+b;
};

// Classes: 

// possibility to define public/private/protected(to be accessed on;y from children elements)
 class Server {
   static VERSION = '1.0.3'
   private status: string = 'working'
  // Classic variant: 
  //  public name: string
  //  protected ip: number
  //  constructor(name, ip) {
  //    this.name = name
  //    this.ip = ip
  //  }

  // New variant: with this syntax TS will create name and ip variables
   constructor(public name, protected ip) {
  }
  public turnOn() {
    this.status = 'working';
   }
  protected turnOff() {
    this.status = 'offline';
   }
// :string - the returning type
  public getStatus(): string {
     return this.status;
   }
 };
 // classes can be used as types
 const server: Server = new Server('AWS', 1234);

 // Objects:

 interface userInterface {
   name: string,
   age: number,
   // function that returns nothing
   logInfo: () => void,
   // ? - not required
   id?: any
 }
 const user: userInterface = {
  name: 'Maria',
  age: 25,
  logInfo() {
    console.log(this.name + ' ' + this.age);
  }
 }

 // Interfaces with classes:

 interface SayHello {
   sayHello: () => void
 }
// 'implements' connect a class with an interface
class User implements SayHello {
  constructor(private name: string, private age: number) {}

  sayHello() {
    console.log(this.name + ' Hello!');
  };
}

// Generic types:
// const arr: Array<number> = [1, 2, 3];

interface User1 {
  id: number
  name: string
  age: number
}
// we can use user1's interface as generic type of array
const users1: Array<User1> = [
  {id: 1, name: 'M', age: 25},
  {id: 1, name: 'R', age: 23}
];
// or
const users2: User1[] = [
  {id: 1, name: 'M', age: 25},
  {id: 1, name: 'R', age: 23}
];
