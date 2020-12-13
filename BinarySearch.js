function binarySearch(array,val){

//return binarySearchRec(array,0,array.length-1,val);
let l = 0;
let r = array.length -1
let mid = Math.floor((l+r)/2);
while(val !== array[mid]){
    if(val < array[mid]){
        r = mid -1; 
    }
    else{
        l = mid +1;
    }
    mid = Math.floor((l+r)/2);
}
return l;




}

function binarySearchRec(array,left,right,val){
    console.log(left, right)
    let mid = Math.floor((left+right)/2);
    if(val === array[mid]){
        return mid;
    }
    
    if(array[mid] > val){
        return binarySearchRec(array,left,mid-1,val);
    }
    else{
        return binarySearchRec(array,mid+1,right,val);
    }

}

let myArray = [1,23,32,42,55,62,111,1111,22342,43645,3573457345]

console.log(binarySearch(myArray,42));