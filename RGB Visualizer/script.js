// Get the slider and input elements
const redSlider = document.getElementById('red-slider');
const greenSlider = document.getElementById('green-slider');
const blueSlider = document.getElementById('blue-slider');
const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const hexInput = document.getElementById('hex');

// Add event listeners to the sliders
redSlider.addEventListener('input', updateInputValues);
greenSlider.addEventListener('input', updateInputValues);
blueSlider.addEventListener('input', updateInputValues);

// Add event listeners to the red, blue, and green input elements
redInput.addEventListener('input', inputToSilder);
greenInput.addEventListener('input', inputToSilder);
blueInput.addEventListener('input', inputToSilder);

function inputToSilder() {
  const red = redInput.value;
  const green = greenInput.value;
  const blue = blueInput.value;

  redSlider.value = red;
  greenSlider.value = green;
  blueSlider.value = blue;

  updateInputValues();
}

// Function to update the input values
function updateInputValues() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  // Update the input values
  redInput.value = red;
  greenInput.value = green;
  blueInput.value = blue;

  // Select the input-container element
  const inputContainer = document.querySelector('body');

  // Update the background color
  inputContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  // Retrieve the background color hex value
  const backgroundColorHex = window.getComputedStyle(inputContainer).getPropertyValue('background-color');

  // update the input value of hex to the hex value
  hexInput.value = rgbToHex(backgroundColorHex);
}

// Function to convert RGB to HEX
function rgbToHex(rgb) {
  const [red, green, blue] = rgb.match(/\d+/g).map(Number);

  const hexRed = ('0' + (red.toString(16))).slice(-2);
  const hexGreen = ('0' + (green.toString(16))).slice(-2);
  const hexBlue = ('0' + (blue.toString(16))).slice(-2);

  return '#' + hexRed + hexGreen + hexBlue;
}

// Function to convert hex to rgb
function hexToR(hex) {
  // Remove the '#' character from the hex value
  hex = hex.replace('#', '');

  // Convert each pair of hexadecimal characters (two characters) to decimal
  return parseInt(hex.substring(0, 2), 16);
}
function hexToG(hex) {
  // Remove the '#' character from the hex value
  hex = hex.replace('#', '');

  // Convert each pair of hexadecimal characters (two characters) to decimal
  return g = parseInt(hex.substring(2, 4), 16);
}
function hexToB(hex) {
  // Remove the '#' character from the hex value
  hex = hex.replace('#', '');

  
  return b = parseInt(hex.substring(4, 6), 16);
}

// Function to detect a change in the hex input
function updateHexValue() {
  const hexValue = hexInput.value;
  redSlider.value = hexToR(hexValue);
  greenSlider.value = hexToG(hexValue);
  blueSlider.value = hexToB(hexValue);
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  // Update the input values
  redInput.value = red;
  greenInput.value = green;
  blueInput.value = blue;

  // Select the input-container element
  const inputContainer = document.querySelector('body');

  // Update the background color
  inputContainer.style.backgroundColor = hexInput.value;
}
hexInput.addEventListener('input', updateHexValue);