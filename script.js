//your JS code here. If required.
// script.js

// Wait for DOM to load before executing
window.onload = function() {
    // Get the element with id "level"
    let element = document.getElementById("level");
    
    // Start with level = 0
    let level = 0;

    // Traverse up the DOM tree until reaching null
    while (element) {
        level++;
        element = element.parentElement;
    }

    // Display the result
    alert("The level of the element is: " + level);
};
