const video = document.getElementById("foodVideo");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
    playButton.style.display = "flex";
  }
});

video.addEventListener("click", () => {
  if (!video.paused) {
    video.pause();
    playButton.style.display = "flex";
  }
});


