# ES6 Promises Tutorial

Welcome to the ES6 Promises tutorial! This guide will help you understand and use JavaScript Promises to handle asynchronous operations effectively.

## Table of Contents
1. [Introduction to Promises](#introduction-to-promises)
2. [Using then, resolve, catch Methods](#using-then-resolve-catch-methods)
3. [Promise Object Methods](#promise-object-methods)
4. [Error Handling with Try/Catch](#error-handling-with-trycatch)
5. [The await Operator](#the-await-operator)
6. [Using async Functions](#using-async-functions)
7. [Examples](#examples)
8. [Resources](#resources)

## Introduction to Promises

### What are Promises?
Promises are objects representing the eventual completion or failure of an asynchronous operation. They can be in one of three states:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: Operation completed successfully.
- **Rejected**: Operation failed.

### Why Use Promises?
Promises help manage asynchronous operations in a more readable and maintainable way than traditional callbacks, preventing "callback hell."

### How Do Promises Work?
A Promise is created using the `Promise` constructor:

```javascript
let promise = new Promise((resolve, reject) => {
    // Perform some async operation
    let success = true; // Example result

    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});

