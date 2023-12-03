// Get all the color input elements
const colorInputs = document.querySelectorAll('.color_pallate input');

// Get the image element
const chairImg = document.getElementById('img');

// Add event listeners to each color input
colorInputs.forEach(input => {
  input.addEventListener('change', function() {
    // Apply the current selected color to the image background
    chairImg.style.backgroundColor = input.value;
  });
});
