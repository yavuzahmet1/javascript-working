//object destructuring

let setting = {
  userName: "Ahmet",
  password: "Bad1234",
  isActive: false,
  ip: "127.0.0.1",
  serverName: "kodluyoruz.org",
};

//let userName=setting.userName
//console.log(userName);

let { userName, password, isActive, ip, serverName } = setting;
