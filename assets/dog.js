const dogApiKey = 'live_nvoj4nry8QrbelXIrr21QYfM6T283RAiapTAPzqH28ZM73D2Nu3J2llBSfdPeEhU'
const dogUrl = `https://api.thedogapi.com/v1`;

let currentImageVote;


function ImageToVoteOn() {

  const url = `${dogUrl}/images/search`;
  
  fetch(url, {
    method:'GET',
    headers: {
      'x-api-key': dogApiKey
    }
  })
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then((data) => {
      currentImageVote = data[0];
      console.log(data)
      document.getElementById("voting-image").src= currentImageVote.url;
    });
}

ImageToVoteOn()

