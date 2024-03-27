// List of image file names
const imageNames = [
  "arc1.png",
  "arc2.png",
  "arc3.png",
  "arc4.png",
  "arc5.png",
  "arc6.png",
];

// Folder path containing the images
const imagePath = "images/";

// Array to store the initial order of image names
const initialOrder = imageNames.slice();

// Function to create and append <img> elements to the document body
function appendImages(imageList) {
  // Clear existing images before appending new ones
  const container = document.getElementById("container");
  container.innerHTML = "";

  // Loop through each image name and create <img> elements
  imageList.forEach(function (imageName) {
    // Create new image element
    const img = document.createElement("img");

    // Set src attribute to the image path
    img.src = imagePath + imageName;

    // Set alt attribute (you can set it to the image name or any other appropriate text)
    img.alt = imageName;

    // Append the image to the container
    container.appendChild(img);
  });
}

// Initial display of images
appendImages(imageNames);

// Function to shuffle the order of images
$("#shuffle").click(function () {
  // Shuffle the array of image names
  const shuffledImages = imageNames.slice().sort(() => Math.random() - 0.5);

  // Update the display with the shuffled images
  appendImages(shuffledImages);

  // Check if the current order matches the initial order
  const isInitialDisplay =
    JSON.stringify(shuffledImages) === JSON.stringify(initialOrder);
  console.log("Is at initial display state:", isInitialDisplay);

  // Update message in the HTML body
  const message = isInitialDisplay ? "You win!" : "You lose!";
  document.getElementById("message").textContent = message;
});

// Function to restore the original order of images
$("#order").click(function () {
  // Restore the original order of images
  appendImages(imageNames);

  // Check if the current order matches the initial order
  const isInitialDisplay =
    JSON.stringify(imageNames) === JSON.stringify(initialOrder);
  console.log("Is at initial display state:", isInitialDisplay);

  // Update message in the HTML body
  const message = isInitialDisplay ? "You win!" : "You lose!";
  document.getElementById("message").textContent = message;
});
