function hello(callback) {
  setTimeout(() => {
    console.log("Hello!");
  }, 1000);

  callback();
}

function goodbye() {
  console.log("Good Bye!");
}
hello(leave);


function leave(){
    console.log("leave!")
}