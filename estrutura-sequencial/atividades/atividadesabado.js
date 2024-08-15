let cotacao, real, dolar
valor= parseFloat(prompt("digite um valor em reais:"))

document.write(`você em R$ ${valor.toFixed(2)} em reais.<br>`);

real = valor

cotacao = parseFloat(prompt("qual a cotação atual do dolar?"));
document.write(`A cotação do dolar está em R$ ${cotacao.toFixed(2)}.<br>`)

dolar = real / cotacao;
document.write(`Você teria $ ${dolar.toFixed(2)} dolares com esse valor.`)
