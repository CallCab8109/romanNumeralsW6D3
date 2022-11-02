function romanize(num) {
  var lookup = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1},roman = '';
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

console.log(romanize(267))

function roman_to_Int(str1) {
    if(str1 == null) return -1;
    var num = char_to_int(str1.charAt(0));
    var pre, curr;
    
    for(var i = 1; i < str1.length; i++){
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i-1));
    if(curr <= pre){
    num += curr;
    } else {
    num = num - pre*2 + curr;
    }
    }
    
    return num;
    }
    
    function char_to_int(c){
    switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
    }
    console.log(roman_to_Int('CCLXVII'));



    //bens answer

    function toRoman(num){
        let answer = ''
      
        while(num > 0){
          if(num === 1000){
            answer += "M"
            num -= 1000
          }else if(num >= 500){
            answer += "D"
            num -= 500
          }else if(num >= 100){
            answer += "C"
            num -= 100
          }else if(num >= 50){
            answer += "L"
            num -= 50
          }else if(num >= 10){
            answer += "X"
            num -= 10
          }else if(num >= 5){
            answer += "V"
            num -= 5
          }else if(num >= 1){
            answer += "I"
            num -= 1
          }
        }
      
        return answer
      }
      
      console.log(toRoman(267))