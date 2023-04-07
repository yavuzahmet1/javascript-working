export default class UserService {

    constructor() {
        this.users = []
    }

    add(user) {

        //console.log("Kullanıcı eklendi ! : "+user)

        this.users.push(user)
    }

    list() {

        //console.log("Kullanıcılar listelendi !")
        return this.users
    }

    getById(id) {

        //console.log("Kullanıcı detayı getirildi !")

        return this.users.find(u=>u.id===id)

    }

}