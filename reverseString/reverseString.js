const reverseString = function(word) {
    // let l= word.length;
    // let words;
    // for(let j=l ;j>0 ;j--){
        
    //     words =word[j-1];
    //    break;
    // }
    // return words;
    // return word.split('');
    return word.split('').reverse().join('');
};
module.exports = reverseString;
