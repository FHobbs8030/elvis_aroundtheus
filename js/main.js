let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let mediaElementSources = new WeakMap(); // Store audio element sources using WeakMap
let soundEnabled = false; // Track whether sound has been enabled by the user

// Function to play audio using Web Audio API
function playAudio(audioElement) {
  // Ensure that sound is enabled by checking the "Enable Sound" button was clicked
  if (!soundEnabled) {
    console.warn("Sound is not enabled yet.");
    return; // Exit if sound hasn't been enabled
  }

  // Resume the audio context if it's suspended
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  // Check if the audioElement is already connected to a MediaElementSourceNode
  if (!mediaElementSources.has(audioElement)) {
    console.log(
      "Connecting audio element to MediaElementSourceNode:",
      audioElement
    );

    // Create a media element source for the audio
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);

    // Store the created MediaElementSourceNode in the WeakMap
    mediaElementSources.set(audioElement, track);
  } else {
    console.log("Audio element already connected:", audioElement);
  }

  // Play the audio, now allowed because interaction happened
  audioElement
    .play()
    .catch((error) => console.error("Error playing audio:", error));
}

// Stop all audio playback and reset to the beginning
function stopAllAudio() {
  const allAudioPlayers = document.querySelectorAll("audio");
  allAudioPlayers.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0; // Reset the audio
  });
}

// Enable sound button logic
const enableSoundButton = document.getElementById("enableSound");

enableSoundButton.addEventListener("click", () => {
  if (!soundEnabled) {
    // Enable sound: Unlock the AudioContext and enable hover effects
    if (audioContext.state === "suspended") {
      audioContext.resume().then(() => {
        console.log("Audio context resumed");
      });
    }
    soundEnabled = true;
    enableSoundButton.textContent = "Disable Sound"; // Change button text
  } else {
    // Disable sound: Stop all audio and disable hover effects
    soundEnabled = false;
    stopAllAudio(); // Stop any currently playing audio
    enableSoundButton.textContent = "Enable Sound"; // Change button text
  }
});

// First card
const dontBeCruelCard = document.getElementById("dontBeCruelCard");
const audioPlayer1 = document.getElementById("audioPlayer1");

dontBeCruelCard.addEventListener("mouseenter", () => {
  console.log("Mouse entered the Don't be Cruel card");
  playAudio(audioPlayer1);
});

dontBeCruelCard.addEventListener("mouseleave", () => {
  console.log("Mouse left the Don't be Cruel card");
  audioPlayer1.pause();
  audioPlayer1.currentTime = 0;
});

// Second card
const returnToSenderCard = document.getElementById("returnToSenderCard");
const audioPlayer2 = document.getElementById("audioPlayer2");

returnToSenderCard.addEventListener("mouseenter", () => {
  console.log("Mouse entered the Return to Sender card");
  playAudio(audioPlayer2);
});

returnToSenderCard.addEventListener("mouseleave", () => {
  console.log("Mouse left the Return to Sender card");
  audioPlayer2.pause();
  audioPlayer2.currentTime = 0;
});

// Third card
const kentuckyRainCard = document.getElementById("KentuckyRainCard");
const audioPlayer3 = document.getElementById("audioPlayer3");

kentuckyRainCard.addEventListener("mouseenter", () => {
  console.log("Mouse entered the Kentucky Rain card");
  playAudio(audioPlayer3);
});

kentuckyRainCard.addEventListener("mouseleave", () => {
  console.log("Mouse left the Kentucky Rain card");
  audioPlayer3.pause();
  audioPlayer3.currentTime = 0;
});

// Fourth card
const dontCard = document.getElementById("dontCard");
const audioPlayer4 = document.getElementById("audioPlayer4");

dontCard.addEventListener("mouseenter", () => {
  console.log("Mouse entered the Don't card");
  playAudio(audioPlayer4);
});

dontCard.addEventListener("mouseleave", () => {
  console.log("Mouse left the Don't card");
  audioPlayer4.pause();
  audioPlayer4.currentTime = 0;
});

// Fifth card
const dontCryDaddyCard = document.getElementById("DontCryDaddyCard");
const audioPlayer5 = document.getElementById("audioPlayer5");

dontCryDaddyCard.addEventListener("mouseenter", () => {
  console.log("Mouse entered the Don't Cry Daddy card");
  playAudio(audioPlayer5);
});

dontCryDaddyCard.addEventListener("mouseleave", () => {
  console.log("Mouse left the Don't Cry Daddy card");
  audioPlayer5.pause();
  audioPlayer5.currentTime = 0;
});

// Sixth card
const iWantYouINeedYouCard = document.getElementById("IwantyouIneedyouCard");
const audioPlayer6 = document.getElementById("audioPlayer6");

iWantYouINeedYouCard.addEventListener("mouseenter", () => {
  console.log("Mouse entered the I Want You I Need You card");
  playAudio(audioPlayer6);
});

iWantYouINeedYouCard.addEventListener("mouseleave", () => {
  console.log("Mouse left the I Want You I Need You card");
  audioPlayer6.pause();
  audioPlayer6.currentTime = 0;
});
