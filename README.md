# JavaScript Null Handling Bug

This repository demonstrates a common but often overlooked error in JavaScript:  incorrect handling of null or undefined values in functions.  The `bug.js` file contains code that doesn't properly manage nulls, leading to potential issues. The solution, found in `bugSolution.js`, illustrates the best practices to avoid these problems. 

## Problem

The original code often fails silently, or causes exceptions when encountering unexpected nulls. 

## Solution

The solution explicitly checks for null or undefined values before proceeding with the rest of the function's logic. Returning a meaningful value, like null or an error message, ensures consistent and predictable behavior.

## How to run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Examine the differences between the incorrect and correct implementations.