import UserService from "../services/userService.js"
import User from "../models/user.js"

console.log("User component loaded !")

let userService = new UserService()

userService.add()
userService.getById(3)
userService.list()

let customer={id:1,firstName:"Ahmet"}

customer.lastName="YAVUZ"//prototyping yapmış olduk sonradan değer girdik

console.log(customer.lastName)

let user1=new User(2,"Murat","Kara","Ankara")

userService.add(user1.firstName)