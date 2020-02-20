const nome = 'Régis'
const peso = 80
const altura = 1.84
const sexo = 'M'

const IMC = peso / (altura * altura)

console.log(IMC)

if((IMC >= 30) || IMC === 29.9) {
   console.log(`${nome} você esta acima do peso`)
} else {
   console.log(`${nome} você não esta acima do peso`)
}
