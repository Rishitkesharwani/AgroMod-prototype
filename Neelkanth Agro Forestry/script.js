const micButton = document.getElementById("mic-button");
const recordingStatus = document.getElementById("recording-status");

if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.interimResults = true;

  micButton.addEventListener("click", () => {
    recognition.start();
    micButton.classList.add("active"); // Change button style
    recordingStatus.classList.remove("hidden"); // Show recording status
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log(transcript); // Handle the transcript here
  };

  recognition.onend = () => {
    micButton.classList.remove("active"); // Reset button style
    recordingStatus.classList.add("hidden"); // Hide recording status
  };
} else {
  console.log("Speech recognition not supported.");
}
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("toggle-menu"),
  closeMenu = document.querySelector(".header__close");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
