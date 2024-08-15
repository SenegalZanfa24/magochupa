let valor, prestacoes

//float = números decimais = int = Números inteiro
valor = parseFloat (prompt( 'Digte o Valor do produt'))

prestacoes = valor / 5 

document.write ( `Seu produto será Vendido em 5x parcelas de:R$ ${prestacoes.toFixed(2)}`)