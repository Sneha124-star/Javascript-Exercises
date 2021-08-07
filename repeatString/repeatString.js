const repeatString = function(word,times) {
    if(times<0) 
    return 'ERROR';
    let string='';
    for(let i=0;i<times;i++){
        string=string+word;
    }
    return string;
};

// let n;
// for(let i=0;i<n;i++){
//     return("hey");
// }
// repeatString('hey', 3) 
// var str="hey";
// str.repeat(3);


module.exports = repeatString;
