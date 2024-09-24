const chalk = require("chalk")

const nota = 6

if(nota >= 7){
    console.log(chalk.green.bold('Parabéns! Você está aprovado!'))
} else{
    console.log(chalk.bgRed('Você não obteve a nota o suficiente e foi reprovado!'))
}

