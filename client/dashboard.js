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

  $(".recomendations").css("visibility", "visible");
  $(".example-equal-height").text("");

  movies.data.forEach(movie => {
    $(".example-equal-height").append(
      `<div class="example-equal-height-card">
      <div class="example-equal-height-figure">
          <i class="fa fa-music icon" aria-hidden="true"></i>
      </div>
      <div class="example-equal-height-caption">
          <h5>Your Songs</h5>
          <p>Churn rate non-disclosure agreement buyer focus ecosystem iPad.</p>
      </div>
    </div>
    <div class="example-equal-height-card">
      <div class="example-equal-height-figure">
          <i class="fa fa-film icon" aria-hidden="true"></i>
      </div>
      <div class="example-equal-height-caption">
          <h5>${movie.title}</h5>
          <p>${movie.overview}</p><br>
          <p><i class="fa fa-star-o" style="font-size:20px;color:yellow"></i>${movie.popularity}</p>
      </div>
    </div>
    <div class="example-equal-height-card">
      <div class="example-equal-height-figure">
          <i class="fa fa-book icon" aria-hidden="true"></i>
      </div>
      <div class="example-equal-height-caption">
          <h5>Your Books</h5>
          <p>Twitter stock equity vesting period learning curve launch party pitch innovator series A financing
              churn rate handshake.&nbsp;</p>
      </div>
    </div>`
    )
  });

}

