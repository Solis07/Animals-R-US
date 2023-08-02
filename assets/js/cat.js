// Api Key
const catApiKey =
  "live_MI5rOkbC3LSYXKNirvGsCCR4Fx6RpllLp6FRHY17sSzyUmipdKho6ua8JnkBYbDn";
const catUrl = `https://api.thecatapi.com/v1`;

// Variables for buttons
var likeBtn = document.getElementById("loveBtn");
var dislikeBtn = document.getElementById("dontLoveBtn");
var favoriteButton = document.getElementById("favoriteBtn");

let currentImageVote;

// Function Displays a image that the user can interact with by either liking or disliking the image.
function ImageToVoteOn() {
  const url = `${catUrl}/images/search?limit=1`;

  fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": catApiKey,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      currentImageVote = data[0];
      document.getElementById("voting-image").src = currentImageVote.url;
      favoriteButton.addEventListener("click", function (event) {
        event.preventDefault();
        AddToFavorites(data);
      });
    });
}

ImageToVoteOn();

var favHistory = JSON.parse(localStorage.getItem("favCatInfo")) || [];

// Function will allow users to save photos of their liking to into a favorites.
function AddToFavorites(data) {
  var favInfo = data[0].url;
  favHistory.push(favInfo);
  localStorage.setItem("favCatInfo", JSON.stringify(favHistory));
}

// Adds a click event to the button
likeBtn.addEventListener("click", ImageToVoteOn);
dislikeBtn.addEventListener("click", ImageToVoteOn);
