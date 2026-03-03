//Ensure the DOM is fully loaded before trying to access elements
document.addEventListener('DOMContentLoaded', function(){
    //Select the target element(the button)
    const myButton = document.getElementById('triggerButton');

    //Select the element whose content we want to change
    const messageDisplay = document.getElementById('messageArea');
    //Check if the element were found(good practice)
    if(myButton && messageDisplay){
    // Define the event handler function
    function handleButtonClick(event) {
        console.log('Button was clicked!');
        console.log('Event object:',event); //Inspect the event object
        console.log('Target element:', event.target); //The button itself

        //Update the message area
        messageDisplay.textContent = "Button clicked! Event handled successfully.";
        messageDisplay.style.color = "green";
        messageDisplay.style.borderColor = "green";

        //You can also change the button itself
        event.target.textContent = "Clicked!";
        event.target.disable = true; //Disable button after click (optional)
        event.target.style.backgroundColor = "#28a745"; //Change button color
    }
    // Attach the event listener to the button for the 'click' event
    myButton.addEventListener('click', handleButtonClick);
    // Example of another event: mouseover
    myButton.addEventListener('mouseover', function () {
        if (!myButton.disabled) { // Only if not already clicked and disabled
            console.log('Mouse is over the button!');
        }
    });
    } else {
       console.error('Could not find the button or message area elements.');

}  
}); //End pf DOMContentLoaded