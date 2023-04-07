export default class UserService {

    constructor(loggerService) {
        this.users = []
        this.loggerService=loggerService
    }

    add(user) {

        //console.log("Kullanıcı eklendi ! : "+user)
        this.users.push(user)
        //this.loggerService.log(user)

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