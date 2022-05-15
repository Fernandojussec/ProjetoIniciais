const express = riquere('express')
const app = express()


app.get('/', (req, res) => {

    res.status(200).send({ message: 'Olá mundo estou funcionando'})

})

app.get('/ola', (req, res) => {

    res.status(200).send({ message: 'Olá teste feito pelo git'})

}


app.listen(3001, () => {

    console.log('Api rodando na porta 3001')

})
