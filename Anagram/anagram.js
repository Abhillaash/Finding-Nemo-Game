const check = document.getElementById("btn1")
const result = document.getElementById("result")

check.addEventListener('click', () => {
    var word1 = document.getElementById("word1").value.toLowerCase().trim();
    var word2 = document.getElementById("word2").value.toLowerCase().trim();

    if (sortingFunc(word1) == sortingFunc(word2)) {
        console.log("anagram")
        result.textContent = "Words are Anagrams "
    }

    else {
        console.log(" Not anagram")
        result.textContent = "Words are not Anagrams"
    }




})
function sortingFunc(str) {
    return str.split("").sort().join("");
}
