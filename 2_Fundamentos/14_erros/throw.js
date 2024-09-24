const x = "10"

//Checar se x é um número ou n
if(!Number.isInteger(x)){
    throw new Error("O valor de x não é um número inteiro, verificar!")
}

console.log('Continuando o código...')