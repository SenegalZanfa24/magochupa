let nome, salario, venda, commissao, salariof

nome = prompt("Qual seu nome?")

salario = parseFloat(prompt("Qual seu salário?"))

venda = parseFloat(prompt("Quantos reais você fez em vendas?"))

commissao = venda*0.15

salariof = salario + commissao

document.write(`${nome} O seu salario após o acrescimo de 15% do valor ${venda} é de ${salariof}`)

