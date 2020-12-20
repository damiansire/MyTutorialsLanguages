/*

let pairSum = []
for (let index = 0; index < arr.length; index ++)
{
    for(let j = index+1; j < arr.length; j++)
    {   
        if(arr[index] + arr[j] == 12)
        { 
            pairSum.append( [ arr[index], arr[j] ] )
        }
    } 
}

*/
let arr = [0, 3, 5, 7, 8, 9, 12]

function twoSum(arr, k) {
    let pairSum = [];
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sumResult = arr[start] + arr[end];
        console.log("estoy aca")
        if (sumResult == k) {
            pairSum.push([arr[start], arr[end]]);
            start++;
            end--;
        } else if (sumResult > k) {
            end--;
        } else if (sumResult < k) {
            start++;
        } else {
            console.log("Amigo, tu numero no me dio mayor, ni menos a 12, ni 12")
        }
    }
    return pairSum;
}

/*

let pairSum = [];
let numberSave = {};
for(let index = 0; index < arr.length; index++)
{
  if(numberSave[ arr[index].toString() ] != undefined)
  {
     pairSum.push([ arr[index], numberSave[arr[index].toString()] )
  }
  else {
  auxNumber = 12 - arr[index];
  numberSave[auxNumber.toString()] = arr[index];
  }
}

*/