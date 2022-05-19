let numbers = [1,2,3,4]
let pessoas = [
    { nome: 'João'},
    { nome: 'Francisco'},
    { nome: 'Kauan'}
]

pessoas.push({ nome: 'Fernando' })
pessoas.push({ nome: 'Glacieli' })

console.log(numbers)

console.log(pessoas[2])

pessoas.forEach(el => {
    console.log(`Olá aluno ${el.nome}`)
})
