let ingrediente1 = "Laranja"
let ingrediente2 = "Mamão"
let comLeite = false



function fazerSuco(ingrediente1, ingrediente2, leite){
    
    if(leite == false){
        let cAux = "Agua"
        console.log(`Seu suco será de ${ingrediente1}, ${ingrediente2} com ${cAux}`)
    } else {
        let cAux = "Leite"
        console.log(`Seu suco será de ${ingrediente1}, ${ingrediente2} com ${cAux}`)
    }
    


}

var fazerSuco2 = (ingrediente1, ingrediente2, leite) => {
    console.log(`Seu suco será de ${ingrediente1}, ${ingrediente2} com ${(leite == true ? 'Leite' : 'Agua')}`)
}


fazerSuco(ingrediente1, ingrediente2, comLeite)
fazerSuco2(ingrediente1, ingrediente2, comLeite)