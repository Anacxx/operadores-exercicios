console.log(`a) 5 é maior que 20 e também é menor que 2? ${5>20 && 5<2}`)
console.log(`b) 5 é igual a 5 ou é igual a “5”? ${5==5 || 5=="5"}`)
console.log(`c) negação de (vinte é maior que cinquenta) ${!(20>50)}`)
console.log(`d) negação de (vinte é maior que cinquenta) ${!(20>50||50>60)}`)


const nome = prompt("Qual é seu nome?")
var salario = Number(prompt("Qual é seu salário?"))
var filhos = Number(prompt("Número de filhos? Se não tiver, digite 0."))
let auxilio = filhos*45.50
let descontoinss = salario*0.05
let salariobase = salario + auxilio - descontoinss
let comissaojan = 5784.50*0.1
let comissaofev = 3418.41*0.1
let comissaomarco = 4124.10*0.1
let comissaoabril = 1874.00*0.1
let comissaomaio = 7000.00*0.1
let comissaojunho = 9450.00*0.1
let salariojan = salario + auxilio + comissaojan - (salario + comissaojan)*0.05
let salariofev = salario + auxilio + comissaofev - (salario + comissaofev)*0.05
let salariomarco = salario + auxilio + comissaomarco - (salario + comissaomarco)*0.05
let salarioabril = salario + auxilio + comissaoabril - (salario + comissaoabril)*0.05
let salariomaio = salario + auxilio + comissaomaio - (salario + comissaomaio)*0.05
let salariojunho = salario + auxilio + comissaojunho - (salario + comissaojunho)*0.05
console.log(`1) O salário base é de ${salario.toFixed(2)}R$. Com auxílio creche de ${auxilio.toFixed(2)}R$. e desconto de INSS de ${descontoinss.toFixed(2)}R$. O salário passou a ser ${salariobase.toFixed(2)}R$.`)
console.log(`2)Em janeiro, ${nome} conseguiu vender 5784.50R$ e ganhou comissão de 10%, valor de ${comissaojan.toFixed(2)}R$. `)
console.log(`3)Em Janeiro o salário foi de ${salariojan.toFixed(2)}. Em fevereiro salário de ${salariofev.toFixed(2)}R$. Março salário de ${salariomarco}R$ Abril salário de ${salarioabril.toFixed(2)}R$ Maio ${salariomaio.toFixed(2)}R$ e em Junho ${salariojunho.toFixed(2)}R$.`)
let salariototal = salariojan + salariofev + salariomarco + salarioabril + salariomaio + salariojunho 
let salariomedio = salariototal / 6
console.log(`A média salarial de ${nome} nos ultimos 6 meses foi de ${salariomedio.toFixed(2)}`)