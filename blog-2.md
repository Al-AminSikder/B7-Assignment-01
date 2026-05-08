# How Generics Help Build Reusable and Strictly Typed Code in TypeScript

## Introduction

Generics are one of the most powerful features of TypeScript. They allow developers to create reusable functions, classes, and interfaces while maintaining strong type safety.

Without generics, developers often need to write duplicate code for different data types. Generics solve this problem by making components flexible and reusable without losing type information.


# What are Generics?

Generics allow a function or class to work with multiple data types.

Example without generics:

```ts
function returnString(value: string): string {
  return value;
}
```

This function only works with strings. If we want the same functionality for numbers or booleans, we would need separate functions.


# Using Generics

With generics, one function can support multiple data types.

```ts
function identity<T>(value: T): T {
  return value;
}
```

Here, `T` is a generic type parameter.

Usage:

```ts
identity<string>("Hello");
identity<number>(100);
identity<boolean>(true);
```

TypeScript automatically preserves the correct type for each value.


# Benefits of Generics

## 1. Code Reusability

Generics allow developers to reuse the same logic for different data types.

Example:

```ts
function getFirstElement<T>(array: T[]): T {
  return array[0];
}
```

Usage:

```ts
getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["A", "B", "C"]);
```

One function works for both numbers and strings.


## 2. Strong Type Safety

Generics preserve type information during development.

```ts
const numberValue = identity<number>(10);
```

TypeScript understands that `numberValue` is a number and provides proper suggestions and error checking.

This reduces bugs and improves code reliability.


## 3. Reduced Code Duplication

Without generics:

```ts
function stringData(value: string): string {
  return value;
}

function numberData(value: number): number {
  return value;
}
```

With generics:

```ts
function data<T>(value: T): T {
  return value;
}
```

Generics help keep the code clean and maintainable.


# Generics with Interfaces

Generics can also be used with interfaces.

Example:

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

Usage:

```ts
const userResponse: ApiResponse<string> = {
  success: true,
  data: "John Doe",
};
```

This makes interfaces flexible while preserving strict typing.


# Generics in Real Projects

Generics are widely used in modern TypeScript applications, especially in:

- API handling
- Reusable React components
- Utility functions
- Database models
- Data structures

They help developers create scalable applications with less duplicated code.


# Conclusion

Generics are essential for building reusable and type-safe applications in TypeScript. They reduce code duplication, improve flexibility, and maintain strict typing across different data structures.

By using generics properly, developers can write cleaner, safer, and more maintainable code in large-scale projects.