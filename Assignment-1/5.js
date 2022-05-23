function charToUppercase(string, c){
    string = string.split('')
    for (let i=0; i< string.length-1; i++){
        if ( string[i] === c ){
            string[i] = string[i].toUpperCase();
        }
    }
    return string.join('')
}

console.log(charToUppercase('snfgaguiageoweAAAfIIIuigui', 'i'))
