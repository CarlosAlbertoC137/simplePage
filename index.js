// // Escreva uma função que receba dois números (a e b) como argumento. Soma a e b. Devolva o resultado

// const soma = (a,b) => {
//    const c = a + b 
//     return c
// }

// console.log(soma(25,43))
// console.log(soma(2,3))

// // Escreva uma função que receba dois valores, digamos a e b, como argumentos. Retorna verdadeiro
// //  se os dois valores forem iguais e do mesmo tipo

// const trueOrFalse = (a,b) =>{
//     if(a === b){
//        return true
//     }else 
//     return false
// }
// console.log(trueOrFalse(11,10))
// console.log(trueOrFalse(11,11))
// console.log(trueOrFalse(11,"11"))

// // Escreva uma função que receba um valor como argumento. Retorne o tipo do valor.

// const typeOf = (a) =>{
//     const result = typeof a
//     return result
// }

// console.log(typeOf("teste"))
// console.log(typeOf(12))
// console.log(typeOf("12"))
// console.log(typeOf(true))
// console.log(typeOf({}))
// console.log(typeOf([]))

// Escreva uma função que receba uma string (a) e um número (n) como argumento. Retorne o enésimo caractere de 'a'.

// const functionOfReturn = (string, number) =>{
    
    
//     const lastletter = string.split("")[number]
    
//     return lastletter
// }

// console.log(functionOfReturn("olá", 2))
// console.log(functionOfReturn(" bom dia ", 5))
// console.log(functionOfReturn(" olá, como esta seu dia hoje?", 7))
// console.log(functionOfReturn("seja bem vindo ao teste", 0))

// // Escreva uma função que receba uma string (a) como argumento. Remova os 3 primeiros caracteres de a. Devolva o resultado

// const removethreefirst = (string) =>{
//     const result = string.slice(3)
//     return result
// }

// console.log(removethreefirst("abacate"))
// console.log(removethreefirst("morango"))
// console.log(removethreefirst("manga"))

// Escreva uma função que receba uma string como argumento. A string contém a substring 'is'. Retorne o índice de 'is'.

    // const substring = (string) => {
    //     const result = string.indexOf("is")
    //     return result
    // }

    // console.log(substring("this"))
    // console.log(substring("israel"))
    // console.log(substring("paris"))
    // console.log(substring("risk"))

    // function uniteUnique(...arr) {
    //   let args = arr
    //   let result = []
     
    
    //   for(let i = 0; i < args.length; i++){
    
    //     for(let j = 0; j < args[i].length; j++){

    //       if(!result.includes(args[i][j])){
    //         result.push(args[i][j])
    //       }
    //     }
    //   }
      
    //   return result;
    // }
    
    // uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    
    // console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

    // function checkCashRegister(price, cash, cid) {
    //   const currencyUnit = {
    //     "PENNY": 0.01,
    //     "NICKEL": 0.05,
    //     "DIME": 0.1,
    //     "QUARTER": 0.25,
    //     "ONE": 1,
    //     "FIVE": 5,
    //     "TEN": 10,
    //     "TWENTY": 20,
    //     "ONE HUNDRED": 100
    //   };
    
    //   let changeDue = cash - price;
    //   let totalCID = 0;
    //   let change = [];
    
    //   // Calculate total cash in drawer
    //   for (let i = 0; i < cid.length; i++) {
    //     totalCID += cid[i][1];
    //   }
    //   totalCID = Math.round(totalCID * 100) / 100;
    
    //   // Handle insufficient funds
    //   if (totalCID < changeDue) {
    //     return {status: "INSUFFICIENT_FUNDS", change: []};
    //   }
    
    //   // Handle closed status
    //   if (totalCID === changeDue) {
    //     return {status: "CLOSED", change: cid};
    //   }
    
    //   // Calculate change
    //   for (let i = cid.length - 1; i >= 0; i--) {
    //     const coinName = cid[i][0];
    //     let coinTotal = cid[i][1];
    //     const coinValue = currencyUnit[coinName];
    //     let coinCount = Math.floor(coinTotal / coinValue);
    //     let returnedCoins = 0;
    
    //     while (changeDue >= coinValue && coinCount > 0) {
    //       changeDue -= coinValue;
    //       changeDue = Math.round(changeDue * 100) / 100;
    //       coinTotal -= coinValue;
    //       coinCount--;
    //       returnedCoins++;
    //     }
    
    //     if (returnedCoins > 0) {
    //       change.push([coinName, returnedCoins * coinValue]);
    //     }
    //   }
    
    //   // Handle insufficient funds after calculation
    //   if (changeDue > 0) {
    //     return {status: "INSUFFICIENT_FUNDS", change: []};
    //   }
    
    //   return {status: "OPEN", change: change};
    // }
    
    // // Exemplo de uso
    // const cid = [
    //   ["PENNY", 1.01],
    //   ["NICKEL", 2.05],
    //   ["DIME", 3.1],
    //   ["QUARTER", 4.25],
    //   ["ONE", 90],
    //   ["FIVE", 55],
    //   ["TEN", 20],
    //   ["TWENTY", 60],
    //   ["ONE HUNDRED", 100]
    // ];
    
    // console.log(checkCashRegister(19.5, 20, cid));
    