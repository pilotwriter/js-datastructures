const selectionSort = (array) => {

    for (let i = 0; i < array.length - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallest]) {
                smallest = j;
            }
        }
        let temp = array[smallest];
        array[smallest] = array[i];
        array[i] = temp;

    }
    return array;

}



let array = [1, 2, 1, 15, 31, 11];
console.log("given array");
console.log(array);
console.log();
console.log(selectionSort(array));