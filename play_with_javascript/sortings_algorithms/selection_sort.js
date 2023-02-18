




/* Time Complexity  O(n2)
   Space Complexity O(1)
*/
let selectionSort=function(arr, n){

    for(let i=0; i<n-1; i++){

        let min=i; // element at index 0 to n-1

        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[min]){ // Check if the current element(arr[j]) is less than the minimum.
                min=j; // if true, then we assign the minimum to that. 
            }
        }

        // Swap values
        let temp=arr[i];
        arr[i]=A[min];
        arr[min]=temp;
    }
}


// Better than Selection sort but not efficient as well
// Time Complexity: O(n), O(n2)
// Space Complexity: O(1) and O(2)
const bubbleSort =(arr)=>{

    for(let i=0; i<arr.length; i++){

        for (let j=0; j<arr.length - i- 1; j++){
            
            if(arr[j] > arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}

let sorting = ['harry', 'barry', 'harry', 'cisco'];
console.log(sorting);

console.log('After: ');
console.log(sorting.sort());



console.group ()