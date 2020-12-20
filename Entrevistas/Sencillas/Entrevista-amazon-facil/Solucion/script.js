let A = [7, 3, 2, 4]
let B = [6, 1, 5]
let totalSumA = totalSum(A) // 16
let totalSumB = totalSum(B) // 12
let dif = (totalSumA - totalSumB) / 2 // 4
let solution = twoSubtractK(A, B, dif)

/*
Fuerza bruta solucion
O(A*B)
function twoSubtractK(arrA, arrB, k) {
    for (let indexA = 0; indexA < arrA.length; indexA++) {
        for (let indexB = 0; indexB < arrB.length; indexB++) {
            if (arrA[indexA] - arrB[indexB] == k) {
                return [arrA[indexA], arrB[indexB]]
            }
        }
    }
}
*/
// O(A) + O(B)
function twoSubtractK(arrA, arrB, k) {
    let aElement = {}
    for (let indexA = 0; indexA < arrA.length; indexA++) {
        aElement[indexA] = 1;
    }
    for (let indexB = 0; indexB < arrB.length; indexB++) {
        if (aElement[k + arrB[indexB]] != undefined) {
            let aElementChange = k + arrB[indexB];
            let bElementChange = arrB[indexB];
            return [aElementChange, bElementChange]
        }
    }
}


function totalSum(arr) {
    let totalSum = 0;
    for (let index = 0; index < arr.length; index++) {
        totalSum = totalSum + arr[index];
    }
    return totalSum;
}