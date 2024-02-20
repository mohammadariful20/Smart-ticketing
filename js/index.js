// Select all buttons and store them in a NodeList
const buttons = document.querySelectorAll('.kbd');

// Variable to keep track of the currently selected button
let selectedButton = null;

// Function to deselect all buttons except the clicked one
function selectButton(button) {
    buttons.forEach(function(btn) {
        if (btn !== button) {
            btn.classList.remove('selected');
        }
    });
}

// Loop through each button in the NodeList
buttons.forEach(function(button) {
    // Add a click event listener to each button
    button.addEventListener('click', function() {
        // Deselect all buttons except the clicked one
        selectButton(button);

        // Toggle the selected state of the clicked button
        button.classList.toggle('selected');

        // Update the selectedButton variable
        selectedButton = button.classList.contains('selected') ? button : null;
    });
});
