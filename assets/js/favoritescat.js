var con = document.querySelector(".fav-voting-pic");

// Function displays the image in the favorites page and also allows them to remove it.
function getFav() {
  var history = JSON.parse(localStorage.getItem("favCatInfo")) || [];
  for (let i = 0; i < history.length; i++) {
    var img = document.createElement("img");
    var remDiv = document.createElement("div");
    var remBtn = document.createElement("button");
    remDiv.setAttribute("class", "remove-button");
    remBtn.setAttribute("id", "removeBtn");
    remBtn.setAttribute("class", "removeBtn");
    remBtn.innerHTML = "Remove";
    img.setAttribute("src", history[i]);
    remDiv.append(remBtn);
    con.append(img);
    con.append(remDiv);
    remBtn.addEventListener("click", function () {
      history.splice(i, 1);
      localStorage.setItem("favCatInfo", JSON.stringify(history));
      window.location.reload();
    });
  }
}

getFav();
