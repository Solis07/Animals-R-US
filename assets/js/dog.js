// Api Key
const dogApiKey =
  "live_nvoj4nry8QrbelXIrr21QYfM6T283RAiapTAPzqH28ZM73D2Nu3J2llBSfdPeEhU";
const dogUrl = `https://api.thedogapi.com/v1`;

// Variables for buttons
var likeBtn = document.getElementById("loveBtn");
var dislikeBtn = document.getElementById("dontLoveBtn");
var favoriteButton = document.getElementById("favoriteBtn");

let currentImageVote;

// Function Displays a image that the user can interact with by either liking or disliking the image.
function ImageToVoteOn() {
  const url = `${dogUrl}/images/search?limit=1`;

  fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": dogApiKey,
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

var favHistory = JSON.parse(localStorage.getItem("favDogInfo")) || [];

// Function will allow users to save photos of their liking to into a favorites.
function AddToFavorites(data) {
  var favInfo = data[0].url;
  favHistory.push(favInfo);
  localStorage.setItem("favDogInfo", JSON.stringify(favHistory));
}

// Adds a click event to the button
likeBtn.addEventListener("click", ImageToVoteOn);
dislikeBtn.addEventListener("click", ImageToVoteOn);
