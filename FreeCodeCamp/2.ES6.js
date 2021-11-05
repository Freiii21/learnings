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
