// dom_script.js
// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
// --- Select Elements ---
const pageTitle = document.getElementById('page-title');
const introParagraph = document.getElementById('intro-paragraph');
const mainImage = document.getElementById('main-image');
const dynamicSection = document.getElementById('dynamic-section');
const updateButton = document.getElementById('update-button');
const toggleImageButton = document.getElementById('toggle-image-button');
const addItemButton = document.getElementById('add-item-button');
const statusMessage = document.getElementById('status-message');
// --- Event Listener for Update Button ---
if (updateButton) {
updateButton.addEventListener('click', function() {
// 1. Update page title text
if (pageTitle) {
pageTitle.textContent = "DOM Updated Successfully!";
}
// 2. Update intro paragraph HTML content
if (introParagraph) {
introParagraph.innerHTML = "The content of this paragraph has been <strong>dynamically changed</strong> using JavaScript. Pretty cool!";
introParagraph.classList.add('highlight'); // Add a CSS class
}
// 3. Change image source and alt text
if (mainImage) {
mainImage.src = "https://picsum.photos/id/20/200/150"; // New image
mainImage.alt = "A different, updated placeholder image";
}
// 4. Change styles directly
if (dynamicSection) {
dynamicSection.style.backgroundColor = "lightblue";
dynamicSection.style.padding = "20px";
dynamicSection.style.border = "2px dashed green";
}
if (statusMessage) {
statusMessage.textContent = "Status: Content Updated!";
statusMessage.style.color = "orange";
}
});
}
// --- Event Listener for Toggle Image Button ---
if (toggleImageButton && mainImage) {
toggleImageButton.addEventListener('click', function() {
// Toggle a class 'hidden' (defined in CSS)
mainImage.classList.toggle('hidden');
// Update button text and status
if (mainImage.classList.contains('hidden')) {
toggleImageButton.textContent = "Show Image";
statusMessage.textContent = "Status: Image Hidden.";
} else {
toggleImageButton.textContent = "Hide Image";
statusMessage.textContent = "Status: Image Shown.";
}
statusMessage.style.color = "red";
});
}
// --- Event Listener for Add Item Button ---
let itemCount = 0;
if (addItemButton && dynamicSection) {
addItemButton.addEventListener('click', function() {
itemCount++;
// Create a new paragraph element
const newItem = document.createElement('p');
newItem.textContent = `This is newly added item #${itemCount}.`;
newItem.style.border = "5px dotted green";
newItem.style.padding = "5px";
newItem.style.marginTop = "10px";
// Append the new item to the dynamic section
dynamicSection.appendChild(newItem);
if (statusMessage) {
statusMessage.textContent = `Status: Item #${itemCount} added!`;
statusMessage.style.color = "blue";
}
});
}
}); // End of DOMContentLoaded listener