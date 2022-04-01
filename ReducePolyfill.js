let arr = [1,2,3,4,5]

// With Reduce
let result = arr.reduce((item,a) => {
    return item + a
},0);

console.log(result)

// Polyfill of Reducec
let presult = 0
arr.forEach((item) => {
    presult = item+presult;

})

console.log(presult)