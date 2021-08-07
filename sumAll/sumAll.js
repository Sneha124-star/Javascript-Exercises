const sumAll = function(num1,num2) {
 
    if(num1<0 || num2<0) return "ERROR";
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if(num1>num2){
        const temp = num2;
        num2=num1;
        num1=temp;
    }
    let sum=0;
    for (let i=num1; i< num2 +1; i++) {
        sum=sum+i;       
    }
    return sum;
};

module.exports = sumAll;
