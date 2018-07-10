function palindrome(str) {
    var arr = [];
    length = str.length;
    str = str.toLowerCase();
    for( var i=0 ; i<length ; i++){
        if(str.charCodeAt(i)>= 97 && str.charCodeAt(i) <= 122){
            arr.push(str[i]);
        }
    }
    let start =0, end = arr.length -1 ;
    while(start <= end){
        if(arr[start] !== arr[end])
            return false;
        start++;
        end--;
    }
    return true;
  }
  
  
  
  var s = palindrome("A man, a plan, a canal. Panama");
  console.log(s);