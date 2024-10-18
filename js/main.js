let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let mediaElementSources = new WeakMap(); 
let soundEnabled = false; 

function playAudio(audioElement) {
  if (!soundEnabled) {
    console.warn("Sound is not enabled yet.");
    return; 
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  if (!mediaElementSources.has(audioElement)) {
    console.log(
      "Connecting audio element to MediaElementSourceNode:",
      audioElement
    );

    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);

    mediaElementSources.set(audioElement, track);
  } else {
    console.log("Audio element already connected:", audioElement);
  }

  audioElement
    .play()
    .catch((error) => console.error("Error playing audio:", error));
}

function stopAllAudio() {
  const allAudioPlayers = document.querySelectorAll("audio");
  allAudioPlayers.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0; 
  });
}

const enableSoundButton = document.getElementById("enableSound");

enableSoundButton.addEventListener("click", () => {
  if (!soundEnabled) {
    if (audioContext.state === "suspended") {
      audioContext.resume().then(() => {
        console.log("Audio context resumed");
      });
    }
    soundEnabled = true;
    enableSoundButton.textContent = "Disable Sound"; 
  } else {
    soundEnabled = false;
    stopAllAudio(); 
    enableSoundButton.textContent = "Enable Sound"; 
  }
});

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
