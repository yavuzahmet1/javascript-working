import UserService from "../services/userService.js"

console.log("User component loaded !")

let userService=new UserService

userService.add()
userService.getById(3)
userService.list()