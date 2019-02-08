function oneAway(word1,word2){
  if (word1 === word2) {
    return true
  }

  if (Math.abs(word1.length - word2.length) > 1) {
    return false
  }

  let {long, short, sameLength} = findLengths(word1,word2)

  for (var i = 0; i < long.length; i++) {
    if(long[i] !== short[i] && !sameLength){
      return (long.substring(i + 1) === short.substring(i))
    } else if(long[i] !== short[i]) {
      return (long.substring(i + 1) === short.substring(i + 1))
    }
  }
}

function findLengths(w1,w2){
  let result = {}
  result.sameLength = w1.length === w2.length

  if (w1.length > w2.length) {
    result.longest = w1
    result.shortest = w2
  } else {
    result.longest = w2
    result.shortest = w1
  }
  return result
}
console.log(oneAway('pale', 'pale')); //true
console.log(oneAway('pale', 'wonderment')); //false
console.log(oneAway('pale', 'bale')); //true
console.log(oneAway('pale', 'pae')); //true
console.log(oneAway('pae', 'palm')); //false
console.log(oneAway('ale', 'ales')); //true
console.log(oneAway('ales', 'sale')); //false
console.log(oneAway('pae', 'palm')); //false
