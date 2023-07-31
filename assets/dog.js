const dogApiKey = live_nvoj4nry8QrbelXIrr21QYfM6T283RAiapTAPzqH28ZM73D2Nu3J2llBSfdPeEhU
const dogUrl = `https://api.thedogapi.com/v1`;

let currentImageVote;


function ImageToVoteOn() {

  const url = `${dogUrl}images/search`;
  
  fetch(url, {headers: {
      'live_nvoj4nry8QrbelXIrr21QYfM6T283RAiapTAPzqH28ZM73D2Nu3J2llBSfdPeEhU'
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      currentImageVote = data[0];
      document.getElementById("voting-image").src= currentImageVote.url;
    });
}

