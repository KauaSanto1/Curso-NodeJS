const { read } = require("fs")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual seu nome? ", (name) => {

    console.log(`O meu nome é: ${name}`)
    readline.close()
})
