// Function to test whether a passed in number is a possible valid CC number
// It only checks if its possible. It might be the case
// that the specific number hasn't yet been assigned to a card
export const testCCNum = (num) => {
    return Luhn(num) && 
        (isVisa(num) || 
        isMasterCard(num) ||
        isAmericanExpress(num) ||
        isDinersClub(num) ||
        isDiscover(num) ||
        isJCB(num));
}

// Tests a possible credit card using the Luhn algorithm
// https://en.wikipedia.org/wiki/Luhn_algorithm
// Basic steps are:
// 1. Convert number to an array
// 2. Starting with rightmost non-check digit, double every other digit.
// 3. If any doubled digit is > 10, add those digits together.
// 4. Add all digits together, including the check digit (the rightmost digit)
// 5. Do modulo 10. If 0, then number is possible valid credit card number.
export const Luhn = (testNum) => {
    const arrOfNum = IntToArray(testNum);

    var i;
    for(i = arrOfNum.length-2; i >= 0; i -= 2) {
        arrOfNum[i] = AddDigits(arrOfNum[i]*2);
    }

    var sum = 0;
    arrOfNum.forEach((dig) => {
        sum += dig;
    })
    return (sum % 10) === 0;
}

// Helper method for Luhn algorithm
// Used for when doubling a digit raises it above 10. 
// Only works for sums < 20
const AddDigits = (num) => {
    if (num < 10) {
        return num;
    }
    return num - 9; // Only works if num is < 20; which should be the case
}

// Helper method for Luhn algorithm
// Takes in a string and return the 
const IntToArray = (numAsStr) => {
    const arr = [];

    numAsStr.split('').forEach(element => {
        arr.push(parseInt(element));
    });

    return arr;
}

const isVisa = (num) => {
    const re = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return re.test(num);
}

const isMasterCard = (num) => {
    const re = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
    return re.test(num);
}

const isAmericanExpress = (num) => {
    const re = /^3[47][0-9]{13}$/;
    return re.test(num);
}

const isDinersClub = (num) => {
    const re = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
    return re.test(num);
}

const isDiscover = (num) => {
    const re = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    return re.test(num);
}

const isJCB = (num) => {
    const re = /^(?:2131|1800|35\d{3})\d{11}$/;
    return re.test(num);
}