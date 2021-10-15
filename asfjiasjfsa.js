function evenNumbers(params) {
    let arrayPar = []
    for (const iterator of params) {
        if (iterator %2 == 0 ){
            arrayPar.push(iterator)
        }
    } 
    return arrayPar
}
const adasds = [1,2,4,5,7,8]
console.log(evenNumbers(adasds));