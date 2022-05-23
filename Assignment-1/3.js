function interchangeDigits(n){
    if (n<10){
        return 'Invalid Input'
    }
    let len = Math.floor(Math.log10(n))
    let firstDigit = Math.floor(n/Math.pow(10,len))
    let lastDigit = n%10
    
    let result = lastDigit*Math.round(Math.pow(10,len))
    result += n%Math.round(Math.pow(10,len))
    result += (firstDigit-lastDigit)
    
    return 'Number  after swapping : ', result
}

console.log(interchangeDigits(2000))
