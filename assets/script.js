const apiKey = "Fd7VAmFbrCeSvGMnw7QhYOr1o2QjeLI9z7O1s9j8";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

function getPotd() {
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // for img
      var imageContainer = document.getElementById("image-container");
      var imageEl = document.createElement("img");

      // for explanation
      var explanation = document.querySelector(".img-explanation");
      explanation.append(data.explanation);
      hideHome();
      imageEl.src = data.url;
      imageEl.className = "img";
      imageContainer.appendChild(imageEl);
    });
}

var exploreBtn = document.getElementById("explore-btn");
exploreBtn.addEventListener("click", getPotd);

function hideHome() {
  var area1 = document.querySelector(".apd-home");
  var area2 = document.querySelector(".apd-display");
  var back = document.querySelector(".back-btn");

  area1.style.display = "none";
  area2.style.display = "block";
}
