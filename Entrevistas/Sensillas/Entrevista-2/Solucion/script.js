// numbers = [6, 9, 13, 3, 1]
//.sort(function(a, b){return a-b});

function removeDuplicates(array) {
    let mySet = new Set(array)
    return Array.from(mySet)
}

myList = list(set(myList))