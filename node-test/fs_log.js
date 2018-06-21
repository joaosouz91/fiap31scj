var fs = require('fs');

fs.readFile(__dirname + '/index.html', function (erro, arquivo) {
    if (erro) throw erro;
    console.log(arquivo);
});

var arquivo = fs.readFileSync(__dirname + '/index.html');
console.log(arquivo);