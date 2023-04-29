const topawards2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt15679400",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt11813216",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards4 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt9114286",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards5 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt6710474",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards6 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt7798604",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

$.ajax(topawards2).done(function (response) {
  $(".pic1").html(`<img id="pic1" src=${response.image.url}></img>`);
});

$.ajax(topawards3).done(function (response) {
  $(".pic2").html(`<img id="pic2" src=${response.image.url}></img>`);
});

$.ajax(topawards4).done(function (response) {
  $(".pic3").html(`<img id="pic3" src=${response.image.url}></img>`);
});

$.ajax(topawards5).done(function (response) {
  $(".pic4").html(`<img id="pic4" src=${response.image.url}></img>`);
});

$.ajax(topawards6).done(function (response) {
  $(".pic5").html(`<img id="pic5" src=${response.image.url}></img>`);
});

var slider = document.getElementById("agerange");
var output = document.getElementById("agespan");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

//Click requirement for emphasis on menu
var click = 0;
$("#icon-menu").click(function () {
  click++;
  if (click == 1) {
    $(".overlay").css("opacity", "40%");
    $(".overlay").css("transition", "0.4s");
    $(".overlay").css("z-index", "-1");
  } else {
    $(".overlay").css("opacity", "100%");
    $(".overlay").css("transition", "1s");
    $(".overlay").css("z-index", "2");

    click = 0;
  }
});
