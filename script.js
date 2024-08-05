const imageSources = [
  "assets/trail.jpg",
  "assets/lakesunset.jpg",
  "assets/cabin.jpg",
  "assets/doe.jpg",
  "assets/starrynight.jpg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element
  const image = document.createElement("img");
  // 1.2 Customize the element
  image.src = imageSource;
  image.classList.add("thumbnail");
  // 1.3 Append the element
  const thumbnailContainer = document.getElementById("thumbnail-container");
  thumbnailContainer.appendChild(image)
  // 1.4 Add the onclick
  image.addEventListener("click", function() {
    const fullSizeImage = document.getElementById("fullsize-image");
    fullSizeImage.src = imageSource;
  });
}

function addAllThumbnails() {
  // 2.1 Loop through imageSources
  for(let i=0; i < imageSources.length; i++) {
    // 2.2 Call addThumbnail each iteration 
    addThumbnail(imageSources[i]);
  }
  
}

// 2.3 Call addAllThumbnails
addAllThumbnails();

// LevelUp Display the first image on page load
document.getElementById("fullsize-image").src = imageSources[0];

