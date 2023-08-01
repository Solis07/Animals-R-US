const catApiKey = 'live_MI5rOkbC3LSYXKNirvGsCCR4Fx6RpllLp6FRHY17sSzyUmipdKho6ua8JnkBYbDn'
const catUrl = `https://api.thecatapi.com/v1`;
var likeBtn = document.getElementById("loveBtn");
var dislikeBtn = document.getElementById("dontLoveBtn");

let currentImageVote;

function ImageToVoteOn() {

  const url = `${catUrl}/images/search?limit=1`;
  
  fetch(url, {
    method:'GET',
    headers: {
      'x-api-key': catApiKey
    }
  })
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then((data) => {
      currentImageVote = data[0];
      document.getElementById("voting-image").src= currentImageVote.url;
    });
}

ImageToVoteOn()

function AddToFavorites() {}

likeBtn.addEventListener("click", ImageToVoteOn);
dislikeBtn.addEventListener("click", ImageToVoteOn);

