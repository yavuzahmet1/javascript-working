export default class UserService {
  add(id,firstName,user) {
    console.log("User is added : " + user);
  }
  list() {
    console.log("Users are listed");
  }

  getById(id) {
    console.log("Fetched with user ID");
  }

}

