function checkCashRegister(price, cash, cid) {
    let change=cash-price
    let cashInRegister=0
    let returnChange=[]
    
    const currencyUnit={
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE":1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY":20,
    "ONE HUNDRED": 100
   }
   //SUMA TODO EL DINERO EN CAJA
   for (let i= 0; i < cid.length; i++) {
    cashInRegister+=(cid[i][1])
   }

   
   let filtered=cid.filter(item=>item[1]!=0)
    for (let i = filtered.length-1;i>=0; i--) {
    //REDONDEO MANUAL PARA EVITAR USAR LIBRERIA DE TERCEROS
    // EN LA MANIPULACION DE FLOTANTES
      if(i==0){
      change+=0.001
     }
     let objItem=currencyUnit[filtered[i][0]]
     let aux=Math.floor(change/objItem)
     let avaiable= Math.round(filtered[i][1]/objItem)

    if(aux>avaiable){ 
     change-=avaiable*objItem;
     (aux!=0)&&returnChange.push([filtered[i][0],(avaiable*objItem)])
    }else{
     change-=aux*objItem;
     (aux!=0)&&returnChange.push([filtered[i][0],(aux*objItem)])
    }
    }
    
   let needChange=cash-price 
   if (cashInRegister.toFixed(2)<needChange||change.toFixed(2)>0){
    return {status: "INSUFFICIENT_FUNDS", change: [] }
   }else if((cashInRegister.toFixed(2)==needChange)){
    return {status: "CLOSED", change: cid }
   }else{
    return {status: "OPEN", change: returnChange }
   }  
  }