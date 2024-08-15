// variavel


let segundos, horas, minutos, dias 

segundos= parseInt(prompt ("digite a hora em segundos"))

horas = segundos / 3600
minutos = segundos / 60
dias = segundos / 86400

document.write(` a quantidade de segundos que voce digitou. em minutos é equivalente a : ${minutos.toFixed(0)} <br>
em horas ${horas.toFixed(0)}<br>
em dias${dias.toFixed(0)}`)
