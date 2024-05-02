let userDOM=document.querySelector("#userList")

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((responseJSON) => {
    console.log(responseJSON);
    
    
  });
