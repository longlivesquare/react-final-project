export const calcShipping = (numItems) => {
    return numItems * 0.65
}

export const calcTaxes = (totalPrice) => {
    return totalPrice*0.1
}