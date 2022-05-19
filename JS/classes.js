//Classes

class people {

    constructor(){
        this.peopleList = []
    }

    addPeople(person){

        this.peopleList.push(person)

    }

    getAll(){

        return this.peopleList

    }
}

const _people = new people()

_people.addPeople({ name: 'Kauan' })

console.log('List', _people.getAll())

//Interfaces
//Heranças

class customer extends people {
    constructor(){
        super()
    
    }
}


const _customer = new customer()

_customer.addPeople({ nome: 'Patricia' })
_customer.addPeople({ nome: 'Alexandre' })
_customer.addPeople({ nome: 'Evandro' })
_customer.addPeople({ nome: 'Jose Aparecido' })

console.log('Cust', _customer.getAll())