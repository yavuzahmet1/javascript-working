class Customer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber
    }
}

let customer=new Customer(1,"12345");
//prototyping
customer.name="Ahmet"
console.log(customer.name)//c'si küçük instance a yapılan prototyping

Customer.bisey="Bişey"
console.log(Customer.bisey)//C'si büyük classa yapılan prototyping

console.log(customer)
//ekran çıktısı
//Customer {id: 1, customerNumber: '12345', name: 'Ahmet'}

console.log(customer.customerNumber)//12345


class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}