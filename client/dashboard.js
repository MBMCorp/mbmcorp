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
function showDB(movies,response,songs) {

  $(".recomendations").css("visibility", "visible");
  $(".example-equal-height").text("");

    $(".example-equal-height").append(
      `<div class="example-equal-height-card">
      <div class="example-equal-height-figure">
          <i class="fa fa-music icon" aria-hidden="true"></i>
      </div>
      <div class="example-equal-height-caption">
      <h5>${songs.data.tracks.track[0].name}</h5>
      <p>${songs.data.tracks.track[0].artist.name}</p><br>

      <h5>${songs.data.tracks.track[1].name}</h5>
      <p>${songs.data.tracks.track[1].artist.name}</p><br>

      <h5>${songs.data.tracks.track[2].name}</h5>
      <p>${songs.data.tracks.track[2].artist.name}</p><br>
      </div>
    </div>
    <div class="example-equal-height-card">
      <div class="example-equal-height-figure">
          <i class="fa fa-film icon" aria-hidden="true"></i>
      </div>
      <div class="example-equal-height-caption">
          <h5>${movies.data[0].title}</h5>
          <p>${movies.data[0].overview}</p><br>
          <p><i class="fa fa-star-o" style="font-size:20px;color:yellow"></i>${movies.data[0].popularity}</p><br><br><br>

          <h5>${movies.data[1].title}</h5>
          <p>${movies.data[1].overview}</p><br>
          <p><i class="fa fa-star-o" style="font-size:20px;color:yellow"></i>${movies.data[1].popularity}</p><br><br><br>

          <h5>${movies.data[2].title}</h5>
          <p>${movies.data[2].overview}</p><br>
          <p><i class="fa fa-star-o" style="font-size:20px;color:yellow"></i>${movies.data[2].popularity}</p><br><br><br>
      </div>
    </div>
    <div class="example-equal-height-card">
      <div class="example-equal-height-figure">
          <i class="fa fa-book icon" aria-hidden="true"></i>
      </div>
      <div class="example-equal-height-caption">
      <h5>${response.books.results.lists[1].books[0].title}</h5>
      <p>${response.books.results.lists[1].books[0].description}</p><br>

      <h5>${response.books.results.lists[1].books[1].title}</h5>
      <p>${response.books.results.lists[1].books[1].description}</p><br>

      <h5>${response.books.results.lists[1].books[2].title}</h5>
      <p>${response.books.results.lists[1].books[2].description}</p><br>
      </div>
    </div>`
    )

}

