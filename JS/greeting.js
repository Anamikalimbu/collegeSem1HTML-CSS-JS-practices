const userName = "Anamika";

// const greetingMessage = "Hello, " + userName + "!Welcome to Javascript";

const greetingMessage = `Hello, ${userName}! Welcome to Javascript.`;

// alert(greetingMessage);

// console.log(greetingMessage);

const greetingElement = document.getElementById("greetingOutput");

if (greetingElement) {
  greetingElement.textContent = greetingMessage;
}
else {
  console.error("Could not find element with that ID");
}