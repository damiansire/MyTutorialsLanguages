const anagramaForm = document.querySelector("#anagramaForm")

anagramaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let word1 = event.target.word1.value;
    let word2 = event.target.word2.value;
    let isAnagramaBool = isAnagrama(word1, word2);
    showMessage(isAnagramaBool)
})

function showMessage(isAnagrama) {
    document.getElementsByClassName("isAnagrama")[0].style.display = isAnagrama ? "block" : "none";
    document.getElementsByClassName("isntAnagrama")[0].style.display = isAnagrama ? "none" : "block";
}

/* 
O(n * log n)
function isAnagrama(word1, word2) {
    word1 = cleanString(word1);
    word2 = cleanString(word2);
    word1 = word1.split("").sort().join("");
    word2 = word2.split("").sort().join("");
    return word1 == word2;

}

*/

/* 
o(n) pero usa un objeto extra
function isAnagrama(word1, word2) {
    word1 = cleanString(word1);
    word2 = cleanString(word2);
    if (word1.length == word2.length) {
        let mapWord1 = wordToMap(word1);
        let mapWord2 = wordToMap(word2);
        for (let letter of Object.keys(mapWord1)) {
            if (!(mapWord1[letter] === mapWord2[letter])) {
                return false;
            }
        }
        return true;
    }
    return false;

}

*/

/* 
o(n) un poquito menos legible pero safa
function isAnagrama(word1, word2) {
    word1 = cleanString(word1);
    word2 = cleanString(word2);
    if (word1.length == word2.length) {
        let mapWord1 = wordToMap(word1);
        for (let letter of Object.keys(mapWord1)) {
            if (mapWord1[letter] != undefined) {
                mapWord1[letter] -= 1;
            } else {
                return false;
            }
        }
        return true;
    }
    return false;

}

*/
function wordToMap(word) {
    let letterMap = {};

    for (let letter of word) {
        if (letterMap[letter] == undefined) {
            letterMap[letter] = 1;
        } else {
            letterMap[letter] += 1;
        }

    }
    return letterMap;
}

function cleanString(word) {
    return word.replaceAll(" ", "").toLowerCase()
}