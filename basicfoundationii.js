// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
var arr = [-1, 3, 5, -5];

function makeItBig() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }
    return arr;
}
console.log(makeItBig());

// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
var arr = [5, 13, 9, 2];

function lowHigh() {
    var low = arr[0];
    var high = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        }
        if (arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(lowHigh());

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
var arr = [2, 3, 7, 4, 9, 5];

function printReturn() {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return arr[i];
        }
    }
}
console.log(printReturn());

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
var arr = [1, 2, 3];

function double() {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}
console.log(double());

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
var arr = [-1, -1, 1, 1];

function countPositives() {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
        arr[arr.length - 1] = count;
    }
    return arr;
}
console.log(countPositives());

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
var arr = [1, 1, 1, 2, 2, 2];

function evenAndOdd() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            if (arr[i + 1] % 2 !== 0) {
                if (arr[i + 2] % 2 !== 0) {
                    console.log("That's odd!");
                }
            }
        }
        if (arr[i] % 2 === 0) {
            if (arr[i + 1] % 2 === 0) {
                if (arr[i + 2] % 2 === 0) {
                    console.log("Even more so!");
                }
            }
        }
    }
}
evenAndOdd();

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
var arr = [1, 2, 3, 4, 5];

function incrementSeconds() {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}
console.log(incrementSeconds());

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
var arr = ["hello", "dojo", "awesome"];

function previousLengths() {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}

console.log(previousLengths());

// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven() {
    var arr = [1, 2, 3, 1];
    var arrNew = [];
    for (var i = 0; i < arr.length; i++) {
        arrNew.push(arr[i] + 7);
    }
    return arrNew;
}
console.log(addSeven());

// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

var x = [2, 4, 6, 1, 3];
console.log(reverse(x));

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function outlookNegative() {
    var arr = [-1, -3, 5];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * -1;
        }
    }
    return arr;
}
console.log(outlookNegative());

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function alwaysHungry() {
    var arr = [1, 2, 3, "food", "food"];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy")
        } else {
            sum++;
        }
    }
    if (sum == arr.length) {
        console.log("I'm hungry");
    }
}

alwaysHungry();

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardCenter(arr) {
    for (var i = 0; i < arr.length / 2; i += 2) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(swapTowardCenter([true, 42, "Ada", 2, "pizza"]));

// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArray() {
    var arr = [1, 2, 3];
    var num = [3];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}

console.log(scaleArray());