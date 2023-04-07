import UserService from "../services/userService.js"
import User from "../models/user.js"
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConserns/logging/logger.js"

//console.log("User component loaded !")
let logger1=new MongoLogger()
let userService = new UserService(logger1)

userService.add()
userService.getById(3)
userService.list()

let customer={id:1,firstName:"Ahmet"}

customer.lastName="YAVUZ"//prototyping yapmış olduk sonradan değer girdik

console.log(customer.lastName)

let user1=new User(2,"Murat","Kara","Ankara")
let user2=new User(1,"Baran","Kökçekli","Adana")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))