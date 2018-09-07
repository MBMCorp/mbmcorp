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
      method: "POST",
      data : {
        age : data.age
      }
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
