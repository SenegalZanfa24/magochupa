let valor, rendimento

valor = parseFloat (prompt ("Digite o Valor que você Deseja Depositar na sua Conta: "))

rendimento = (valor/100) * 0.7 + valor

document.write (`Apos 1 Mes de Rendimento, o Valor Depositado + 0.7%  e: R$ ${rendimento.toFixed(2)}`)