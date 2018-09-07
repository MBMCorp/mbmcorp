function showRec() {
  let item = $(".example-equal-height")
  if (item.style.visibility=='visible') {
    item.style.visibility = 'hidden';
  }
  else {
    item.style.visibility = 'visible'
  }
}

//Append List
function showDB(movies) {

  $(".example-equal-height").text("");

  console.log("inilho", movies)
  movies.data.forEach(movie => {
    $(".movieList").append(
      `<h5>${movie.title}</h5>
        <p>${movie.overview}</p><br>
        <p><i class="fa fa-star-o" style="font-size:20px;color:yellow"></i>${movie.popularity}</p>
        `)
  });

}

