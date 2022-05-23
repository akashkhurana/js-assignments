function isEven(n){
     if ( n%2 == 0){
         return true
        }
        return false
    }

function seperateArray(nums){
    let i = 0;
    let j = nums.length-1;
    while(i<j){
        if(isEven(nums[i])){
            if(!isEven(nums[j])){
                j--;
            }      
            i++;
        }    
        else if(!isEven(nums[i])){
            if(isEven(nums[j])){
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;      
            }
            j--;    
        }  
    }  
    //Removing duplicate elements  
    return nums.reduce((a,b)=>{    if(a.indexOf(b) < 0)     a.push(b);    return a;  },[]);}
nums = [-66, -62, -45, -15, 0, 4, 20, 30, 44, 85, 0, 4];console.log(seperateArray(nums))