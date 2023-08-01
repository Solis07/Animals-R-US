const catApiKey = 'live_MI5rOkbC3LSYXKNirvGsCCR4Fx6RpllLp6FRHY17sSzyUmipdKho6ua8JnkBYbDn'
const catUrl = `https://api.thecatapi.com/v1`;

let currentImageVote;

function ImageToVoteOn() {

  const url = `${catUrl}/images/search`;
  
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
      console.log(data)
      document.getElementById("voting-image").src= currentImageVote.url;
    });
}

ImageToVoteOn()


