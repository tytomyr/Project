
let url = "https://tytomyr.github.io/JSON/users.json";
fetch(url)
.then(function(resp) {
return resp.json();
})
.then (function(data){
    console.log(data);
})



