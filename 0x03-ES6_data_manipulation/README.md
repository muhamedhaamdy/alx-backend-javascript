# ES6 Data Manipulation

Welcome to the ES6 Data Manipulation class! This course covers essential JavaScript concepts and methods for effectively manipulating and managing data in arrays and advanced data structures. Below you'll find an overview of the topics we will cover and how to use the various methods and data structures.

## Table of Contents

- [Introduction](#introduction)
- [Iterative Methods](#iterative-methods)
  - [How to Use `map()`, `filter()`, and `reduce()` on Arrays](#how-to-use-map-filter-and-reduce-on-arrays)
- [Typed Arrays](#typed-arrays)
- [Advanced Data Structures](#advanced-data-structures)
  - [Set](#set)
  - [Map](#map)
  - [WeakMap](#weakmap)
  - [WeakSet](#weakset)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This course is designed to provide a comprehensive understanding of data manipulation using ES6 (ECMAScript 2015) features. You'll learn how to use array methods, typed arrays, and advanced data structures like `Set`, `Map`, `WeakMap`, and `WeakSet`.

## Iterative Methods

### How to Use `map()`, `filter()`, and `reduce()` on Arrays

**`map()`**

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
