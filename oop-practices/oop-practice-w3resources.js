// URL: https://www.w3resource.com/javascript-exercises/oop/index.php

/* 
NUMBER 1:
Write a JavaScript program to create a class called "Person" with properties for
name, age and country. Include a method to display the person's details. Create
two instances of the 'Person' class and display their details. 
*/
class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = new Date().getFullYear() - age;
    this.country = country;
  };

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
  };
};

/* 
NUMBER 2:
Write a JavaScript program to create a class called 'Rectangle' with properties 
for width and height. Include two methods to calculate rectangle area and perimeter.
Create an instance of the 'Rectangle' class and calculate its area and perimeter.
*/
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  };

  get getArea() {
    return this.width * this.height;
  };

  get getPerimeter() {
    return (this.width + this.height) * 2;
  };
};

/*
NUMBER 3:
Write a JavaScript program that creates a class called 'Vehicle' with properties for 
make, model, and year. Include a method to display vehicle details. Create a subclass 
called 'Car' that inherits from the 'Vehicle' class and includes an additional property 
for the number of doors. Override the display method to include the number of doors.
*/
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  };

  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  };
};

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  };

  displayDetails() {
    super.displayDetails();
    console.log(`Doors: ${this.doors}`);
  };
};

/*
NUMBER 4:
Write a JavaScript program that creates a class called "BankAccount" with 
properties for account number and balance. Include methods to deposit and 
withdraw money from the account. Create some instances of the "BankAccount" 
class, deposit some money, and withdraw a portion of it.
*/
class BankAccount {
  constructor(account, balance) {
    this.account = account;
    this.balance = balance;
  };

  set deposit(amount) {
    this.balance += amount;
  };

  set withdraw(amount) {
    this.balance -= amount;
  };
};

/*
NUMBER 5:
Write a JavaScript program that creates a class called 'Shape' with a method to calculate 
the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' 
class and override the area calculation method. Create an instance of the 'Circle' class 
and calculate its area. Similarly, do the same for the 'Triangle' class.
*/
class Shape {
  calcArea() {
    throw new Error("Method 'calcArea()' must be overridden in subclasses.");
  };
};

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  };

  calcArea() {
    return (this.radius ** 2) * Math.PI;
  };
};

class Triangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  };

  calcArea() {
    return (this.width * this.height) / 2;
  };
};

/*
NUMBER 6:
Write a JavaScript program that creates a class called 'Employee' with properties for name
and salary. Include a method to calculate annual salary. Create a subclass called 'Manager'
that inherits from the 'Employee' class and adds an additional property for department.
Override the annual salary calculation method to include bonuses for managers. Create two 
instances of the 'Manager' class and calculate their annual salary.
*/
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  };

  get calcAnnualSalary() {
    return this.salary * 12;
  };

  set editSalary(amount) {
    return this.salary = amount;
  };
};

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary);
    this.bonus = bonus;
  };

  get calcAnnualSalary() {
    const baseSalary = super.calcAnnualSalary;
    const bonus = 0.1;

    return (baseSalary * bonus) + baseSalary;
  };
};

/*
NUMBER 7:
Write a JavaScript program that creates a class `Book` with properties for title, author,
and publication year. Include a method to display book details. Create a subclass called
'Ebook' that inherits from the 'Book' class and includes an additional property for book 
price. Override the display method to include the book price. Create an instance of the 
'Ebook' class and display its details.
*/
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  };

  get bookDetails() {
    return {
      title: this.title,
      author: this.author,
      year: this.year
    };
  };
};

class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  };

  get bookDetails() {
    return {
      ...super.bookDetails,
      price: new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 2
      }).format(this.price)
    };
  };
};

/*
NUMBER 8:
Write a JavaScript program that creates a class called 'Animal' with properties for
species and sound. Include a method to make the animal's sound. Create a subclass 
called 'Dog' that inherits from the 'Animal' class and adds an additional property 
for color. Override the make sound method to include the dog's color. Create an instance 
of the 'Dog' class and make it make its sound.
*/
class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  };

  makeSound() {
    console.log(this.sound);
  };
};

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  };

  makeSound() {
    super.makeSound();
    console.log(this.color);
  };
};

/*
NUMBER 9:
Write a JavaScript program that creates a class called Bank with properties for bank names 
and branches. Include methods to add a branch, remove a branch, and display all branches. 
Create an instance of the Bank class and perform operations to add and remove branches.
*/
class Bank {
  constructor(name, branches = []) {
    this.name = name;
    this.branches = [...branches];
  };

  set addBranch(newBranch) {
    return this.branches.push(newBranch);
  };

  set removeBranch(branch) {
    const index = this.branches.findIndex(b => b === branch);

    if (index !== -1) {
      return this.branches.splice(index, 1);
    } else {
      return `Branch ${branch} does not exist.`
    };
  };

  get allBranches() {
    if (this.branches.length < 1) {
      return `No branches available.`;
    };

    return this.branches;
  };
};

/*
NUMBER 10:
Write a JavaScript program that creates a class called Product with properties for
product ID, name, and price. Include a method to calculate the total price by multiplying 
the price by the quantity. Create a subclass called PersonalCareProduct that inherits 
from the Product class and adds an additional property for the warranty period. Override 
the total price calculation method to include the warranty period. Create an instance of 
the PersonalCareProduct class and calculate its total price.
*/
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  };

  get totalPrice() {
    return this.price;
  };

  set setQuantity(qty) {
    this.price *= qty;
  };
};

class PersonalCareProduct extends Product {
  constructor(id, name, price, warranty) {
    super(id, name, price);
    this.warranty = warranty;
  };

  set setQuantity(qty) {
    super.setQuantity = qty;
    this.price = super.totalPrice * this.warranty;
  };
};

/*
NUMBER 11:
Write a JavaScript program that creates a class called BankAccount with properties for 
account number, account holder name, and balance. Include methods to deposit, withdraw, 
and transfer money between accounts. Create multiple instances of the BankAccount class 
and perform operations such as depositing, withdrawing, and transferring money.
*/
class PersonalBankAccount {
  constructor(account, holder, balance) {
    this.account = account;
    this.holder = holder;
    this.balance = balance;
  };

  #formatNumberToCurrency(value, locale = 'id-ID', currency = 'IDR') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 2
    }).format(value);
  };
  
  get currentBalance() {
    return this.#formatNumberToCurrency(this.balance);
  };

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.#formatNumberToCurrency(amount)} deposited into account ${this.account}.`);
  };
  
  withdraw(amount) {
    if (amount >= this.balance) {
      console.log(`Insufficient balance in account ${this.account} to withdraw.`);
      return;
    };
    
    this.balance -= amount;
    console.log(`${this.#formatNumberToCurrency(amount)} withdrawed from account ${this.account}.`);
  };

  transfer(amount, recipient) {
    if (amount > this.balance) {
      console.log(`Insufficient balance in account ${this.account} to transfer.`);
      return;
    };

    this.balance -= amount;
    recipient.deposit(amount);
    console.log(`Transferred ${this.#formatNumberToCurrency(amount)} from ${this.account} to ${recipient.account}`);
  };
};

const ryu = new PersonalBankAccount('RA2008', 'Ryu Alvano', 500000);
console.log(ryu.currentBalance);

/* 
NUMBER 12:
Write a JavaScript program that creates a class called University with properties 
for university name and departments. Include methods to add a department, remove 
a department, and display all departments. Create an instance of the University 
class and add and remove departments.
*/
class University {
  constructor(name, departments = []) {
    this.name = name;
    this.departments = [...departments];
  };

  get allDepartments() {
    if (this.departments.length < 1) {
      throw new Error(`No departments found.`)
    }
    return this.departments;
  };
  
  addDepartment(department) {
    this.departments.push(department);
    console.log(`${department} has been added to ${this.name} departments list.`);
  };

  removeDepartment(department) {
    const index = this.departments.findIndex(d => d === department);
    
    if (index === -1) {
      console.log(`${department} is not available.`);
      return;
    };
    
    this.departments.splice(index, 1);
    console.log(`${department} has been removed from ${this.name} departments list.`);
  };
};