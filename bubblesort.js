function bubbleSort(array) {

    while(true){
        let swapped = false
        for(let i = 0; i<array.length - 1; i++){
            if(array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
        
        if(!swapped){
            return array;
        }
    }

    // while (rightIndex <= array.length) {           
    //     if (array[leftIndex] > array[rightIndex]) {
    //         let temp = array[leftIndex];
    //         array[leftIndex] = array[rightIndex];
    //         array[rightIndex] = temp;
    //         leftIndex++;
    //         rightIndex++;
    //         bubbleSort(array);
    //     }
    //     else {
    //         leftIndex++;
    //         rightIndex++;
    //     }
    // }
    // return array;
}

let array = [1, 2, 1, 15, 31, 11];
console.log("given array");
console.log(array);
console.log();
console.log(bubbleSort(array));