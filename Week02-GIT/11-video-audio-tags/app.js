const djImg = document.getElementById(`meDJ`);
const ericPrydz = document.getElementById(`ericPrdyz`);

djImg.addEventListener(`load`, function () {
  console.log(`hello I have loaded`);
});

// button controls:
const playBtn = document.getElementById(`playAudio`);
const pauseBtn = document.getElementById(`pauseAudio`);
const muteBtn = document.getElementById(`muteAudio`);

console.dir(ericPrydz);
playBtn.addEventListener(`click`, function (event) {
  ericPrydz.play();
});
WDWD;
pauseBtn.addEventListener(`click`, function () {
  ericPrydz.pause();
});

// Mute Button Made with named event function NOT annoymously

function toggleMute(event) {
  if (event.type === "click") {
    ericPrydz.muted = true;
  } else if (event.type === `mouseup`) {
    ericPrydz.muted = false;
  }
}

muteBtn.addEventListener(`click`, toggleMute);
muteBtn.addEventListener(`mouseup`, toggleMute);
