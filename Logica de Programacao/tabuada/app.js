function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var multiplicador = 1;
var tabuada = parseInt(prompt("Qual tabuada você quer exibir?"));

while(multiplicador <= 10) {

    mostra(tabuada * multiplicador);
    multiplicador = multiplicador + 1;
}

mostra("FIM");