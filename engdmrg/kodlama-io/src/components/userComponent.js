//import UserService from "..src/services/userService";

import UserService from "..services/userService";
import User from "../models/user";

console.log("User component is loaded !");

let userService=new UserService();
let user=new User();

userService.add();
userService.getById(2);
userService.list();
