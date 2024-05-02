function sum(num1,num2){
    if(num1=== undefined || num2=== undefined){
        return "hubo error con los argumentos";
    }
    return num1 + num2;
}
module.exports = sum;