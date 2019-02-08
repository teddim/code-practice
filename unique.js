let str = "asdfghj"
let str2 = "hello"
function allUnique(str){

  let letterCount = str.split('')
  let obj = {}
  for (var i = 0; i < letterCount.length; i++) {
    if(obj[letterCount[i]]){
      return false
    }else {
      obj[letterCount[i]] = 1
    }
  }
  return true
}

function uniqueString(str){
  let newStr = str.split('').sort()
  for (var i = 0; i < newStr.length; i++) {
    if(newStr[i] === newStr[i+1]){
      return "letters are not unique"
    }
  }
  return "letters are unique"
}
console.log(allUnique(str))
console.log(allUnique(str2))
console.log(uniqueString(str))
console.log(uniqueString(str2))
