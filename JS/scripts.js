function displayTime() { //creates timer
  const minutes = Math.floor(time/60);
  const seconds = time % 60;
  const clock = document.querySelector('.clock');
  clock.innerHTML = time;
  if (seconds<10) {
    clock.innerHTML =  `${minutes}:0${seconds}`;
  } else {
    clock.innerHTML = `${minutes}:${seconds}`;
  }
}

function startClock() {
  clockID = setInterval(() => {
    time++;
    displayTime();
  }, 1000);
}

function stopClock() {
  clearInterval(clockID);
  clockOff =true;
}:

/* Blue print will be split into 7 different grids, one of the 7 grids will be a long one consisting in the same length of
the other two that has 3 grids, to complete one big blueprint grid. Each division will have different 
ammounts of sprinklers and alarm systems in each room/grid. Every room has a door, and we will have tw0 exit doors, one north
and one South. We will simulate that the fire is growing. We will have a random(1-7) method that will pick one of he 7 grids
and it will catch on fire, randomly. We will have grids say on or off for the sprinkler. Instead of putting out the fire
which might be. "Random(fire) - If(hasSprinker(), sprinkler = 1(on))."
