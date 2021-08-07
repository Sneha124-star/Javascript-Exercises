const removeFromArray = function(...args) {
// for multiple arguments
const array =args[0];
const newArray =[];
array.forEach((item) => {
    if(!args.includes(item)){
        newArray.push(item);
    }

});
return newArray;
//     const index = arr.indexOf(num);
// if (index > -1) {
//   arr.splice(index, 2);
// }
// return arr;

};

module.exports = removeFromArray;
