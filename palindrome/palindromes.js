const palindromes = function (word) {
    function reverseString(str) {
        return str;
    }
    let realw = reverseString(word);
let l = realw.length;
let l1 =word.length;
if(l===l1){
    let i=0;
    for(let j=i;j<l;j++){
        if(word[i]===realw[j]){
            i++;

        }
        return true;
    }
}
else
return "false";
};

module.exports = palindromes;
