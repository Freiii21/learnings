//1.Compare Scopes of the var and let Keywords
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/compare-scopes-of-the-var-and-let-keywords
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

//2.Mutate an Array Declared with const
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/mutate-an-array-declared-with-const
const s = [5, 7, 2];
function editInPlace() {
    s.pop()
    s.unshift(2)
    return s;
}
editInPlace();


//3.Prevent Object Mutation
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/prevent-object-mutation
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//4.Use Arrow Functions to Write Concise Anonymous Functions
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-arrow-functions-to-write-concise-anonymous-functions
const magic = () => new Date();

//5.Write Arrow Functions with Parameters
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//6.Set Default Parameters for Your Functions
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions
const increment = (number, value = 1) => number + value;

//7.Use the Rest Parameter with Function Parameters
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

//8.Use the Spread Operator to Evaluate Arrays In-Place
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);