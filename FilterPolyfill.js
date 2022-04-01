let arr = [1,2,3,4,5,6];

// With Filter
let oddArr = arr.filter((item) => item%2!=0)
console.log(oddArr)

let oddArrP = []

// With Polyfill of Filter
arr.forEach((item) => {
    if (item %2!=0){
        oddArrP.push(item)
    }
})

console.log(oddArrP)