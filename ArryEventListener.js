let arr = [1,2,3,4,5]

Array.prototype.oldPush = Array.prototype.push

Array.prototype.push = function (args) {
    arr.oldPush(args)
    console.log('added value' + args)
}

arr.push(6)
arr.push(7)