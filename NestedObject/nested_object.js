

const transformValue = obj => {

    for (const value in obj) {
        obj[value] = updateValue(obj[value]);
    }

    return obj;
}

//Helpers

// iterating through arrays is done differently

const transformArray = arr => {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = updateValue(arr[i]);
    }

    return arr;
}

// filtering for different value types

const updateValue = (value) => {
    if (typeof value === "number") {
        return value + 1;
    }
    else if (typeof value === "string") {
        return value + ' AI';
    }
    else if (Array.isArray(value)) {
        return transformArray(value);
    }
    else if (typeof value === "object") {
        return transformValue(value);
    }

    return null;
}


// Test
let input = {
    a: 123,
    b: 'hero',
    c: [1, 2, 3],
    d: {
      e: 3,
      f: ['abc', 'def']
    }
  }
  
/* Resulting Output
  {
    a: 124,
    b: 'hero AI'
    c: [2, 3, 4]
    d: {
      e: 4
      f: ['abc AI', 'def AI']
    }
  }
*/

console.log(transformValue(input));

