function twoSmallest(nums){
    size = nums.length;
    let i, first, second
    if (size < 2){
        console.log('Invalid Input');
    }
    
    first = Number.MAX_VALUE;
    second = nums.MAX_VALUE;

    for (i=0; i<size; i++){
        if (nums[i]<first){
            second = first;
            first = nums[i];
        }

        else if (nums[i]<second && nums[i]!=first){
            second = nums[i]
        }
    }
    console.log(first, second);
}


let nums = [12,10,5,88,30]
twoSmallest(nums)
