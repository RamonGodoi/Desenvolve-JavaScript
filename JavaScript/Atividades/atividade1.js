const Soma=(numero1, numero2)=> numero1+numero2
const Subtrai=(numero1, numero2)=> numero1-numero2
const Multiplicar=(numero1, numero2)=> numero1*numero2
const Divide =(numero1, numero2)=> numero1/numero2
const Resultados =(numero1, numero2) => {
    console.log("Soma=",Soma(numero1,numero2))
    console.log("Subtração=",Subtrai(numero1,numero2))
    console.log("Multiplicação=",Multiplicar(numero1,numero2))
    console.log("Divisão=",Divide(numero1,numero2))
}
Resultados(10, 2)