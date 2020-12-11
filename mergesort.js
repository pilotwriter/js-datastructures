function mergeSort(array) {
    if(array.length <= 1){
        return array;
    }
 
    

    const half = Math.ceil(array.length / 2);

    let leftSide = mergeSort(array.slice(0, half));
    let rightSide = mergeSort(array.slice(half, array.length));
    let newSortedArray = Array();
    while(leftSide.length !== 0 && rightSide.length !== 0){
        if(leftSide[0] > rightSide[0]){
            newSortedArray.push(rightSide.shift());
        }
        else{
            newSortedArray.push(leftSide.shift());
        }
    }
    newSortedArray = newSortedArray.concat(leftSide);
    newSortedArray = newSortedArray.concat(rightSide);
 
return newSortedArray;


}
let mahmut = [51,365,48,53,48,465,15,9,84,1,15,15,468,43,56];

console.log(mergeSort(mahmut));