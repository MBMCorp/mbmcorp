const APIkey = "adaa4a18cb57a3bfa9ea8136605ab8a0";
const id = localStorage.getItem("email");
$.ajax({
  url: `http://localhost:3000/users/?email=id`,
  method: "GET"
})
.done(data=>{
  if(data.age<17){

  } else{
    $.ajax({
      url: `http://localhost:3000/movies`,
      method: "GET"
    })
    .done(data=>{
      console.log(data);
    })
    .fail(()=>{
      console.log(fail);
    });
  }
})
.fail(()=>{
  console.log(fail);
})
