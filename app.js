let x = 0,
  play = true,
  interval;

const rotate = () => {
  const cubes = document.querySelectorAll(".cube");
  Array.from(cubes).forEach(
    cube => (cube.style.transform = `rotateY(${x}deg)`)
  );
};

const changePlayPause = () => {
  const i = document.querySelector(".play-pause i");
  const cls = i.classList[1];
  if (cls === "fa-play") {
    i.classList.remove("fa-play");
    i.classList.add("fa-pause");
  } else {
    i.classList.remove("fa-pause");
    i.classList.add("fa-play");
  }
};

const playPause = () => {
  if (play) {
    interval = setInterval(() => {
      x -= 90;
      rotate();
    }, 1000);
    changePlayPause();
    play = false;
  } else {
    clearInterval(interval);
    changePlayPause();
    play = true;
  }
};

document.querySelector(".left-arrow").addEventListener("click", () => {
  x += 90;
  rotate();
});

document.querySelector(".left-arrow").addEventListener("mouseover", () => {
  x += 25;
  rotate();
});

document.querySelector(".left-arrow").addEventListener("mouseout", () => {
  if (!play) playPause();
  x -= 25;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  if (!play) playPause();
  x -= 90;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("mouseover", () => {
  x -= 25;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("mouseout", () => {
  x += 25;
  rotate();
});

document.querySelector(".play-pause").addEventListener("click", () => {
  playPause();
});
