let sl, prc, aumento

sl =parseFloat(prompt("digite o seu salario:"))
prc = parseFloat(prompt("Digite o quanto seu salario ira aumentar em casas decimais:"))

aumento = sl * prc


document.write(`o seu novo salario é de : R$ ${aumento}`)