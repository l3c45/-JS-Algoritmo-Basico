function rot13(str) {
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split()
 return(
    str.split()
   .map(car=alphabet.indexOf(car)===-1caralphabet.indexOf(car))
   .map(num=typeof num===numbernum=13num-13num+13num)
   .map(index=typeof index===numberalphabet[index]index)
    .join()
  )}

rot13(SERR PBQR PNZC);