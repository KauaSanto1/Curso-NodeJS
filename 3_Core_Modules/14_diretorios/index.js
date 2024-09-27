const fs = require("fs")

//verificando pela primeira vez se a pasta existe
if(!fs.existsSync('./minhapasta')){
    console.log("A pasta não existe!")
    //criando a pasta
    fs.mkdirSync("minhapasta")
}
//verificando pela segunda vez se a pasta existe
else if(fs.existsSync('./minhapasta')){
    console.log("A pasta foi encontrada!")
}