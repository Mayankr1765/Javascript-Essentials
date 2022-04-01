let arr = [1,2,3,4,5]

// With Map
let ans = arr.map((item) => item*2)
console.log(ans)

let aa = []

// Polyfill of Map
arr.forEach((item) => {
    let a = item *2;
    aa.push(a)
})
console.log(aa)


