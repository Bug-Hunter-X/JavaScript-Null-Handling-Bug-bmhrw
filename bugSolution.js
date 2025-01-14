function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return null; // Or throw an error: throw new Error('Null or undefined values passed'); 
  }
  // ... rest of your function
}