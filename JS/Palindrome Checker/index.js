function palindrome(str) {
const regex=/\W+|_||\s+/gi
let arrReverse =[]
let arrAlfaNum=str.replace(regex,"").toLowerCase().split("")
 for (let index = arrAlfaNum.length-1; index >=0; index--) {
    arrReverse.push(arrAlfaNum[index])
  }
 
  return  arrReverse.join("")===arrAlfaNum.join("")
}
palindrome("eye");