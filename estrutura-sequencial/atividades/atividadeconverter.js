let valor, cotacao, converter

valor= parseFloat(prompt("Qual valor disponivel que você tem na conta?:"))
cotacao= parseFloat(prompt("qual valor de conversão de U$ para R$?:"))

converter = cotacao * 5.47
document.write (`O valorque voce esta possuindo em U$ é:${converter.toFixed(2)}`)
