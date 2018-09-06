const APIkey = "adaa4a18cb57a3bfa9ea8136605ab8a0";
const id = localStorage.getItem("id");
$.ajax({
  url: `http://localhost:3000/user/${id}`,
  method: "GET"
})
.done(data=>{
  if(data.age<17){

  } else{
    $.ajax({
      url: `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&api_key=${APIkey}`,
      method: "GET"
    })
    .done(data=>{
      console.log(data);
    })
    .fail(()=>{
      console.log(fail);
    })
  }
})
.fail()
