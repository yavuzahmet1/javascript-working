export default class UserService {
  add(user) {
    console.log("User is added : " + user);
  }
  list() {
    console.log("Users are listed");
  }

  getById(id) {
    console.log("Fetched with user ID" +id);
  }

}

