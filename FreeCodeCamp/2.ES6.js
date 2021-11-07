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