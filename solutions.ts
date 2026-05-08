// Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}



// Problem 2
function reverseString(input: string): string {
  return input.split("").reverse().join("");
}



// Problem 3
type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
}



// Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}



// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}



// Problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}



// Problem 7
function getIntersection(array1: number[], array2: number[]): number[] {
  return array1.filter((item) => array2.includes(item));
}
