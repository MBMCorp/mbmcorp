$.ajax({
  url: `http://localhost:3000/books`,
  method: "GET"
})
.done(data=>{
  console.log(data);
})
.fail(()=>{
  console.log(fail);
})
