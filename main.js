const progressBar = document.querySelector('#progress-bar');
const circles = document.querySelectorAll('.circle');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentActive = 0;
nextBtn.addEventListener('click', () => {
  currentActive++;
  btnUpdate();
  if (currentActive < 4) {
    progressBar.value += 30;
    circles[currentActive].classList.add('active');
  }
});

prevBtn.addEventListener('click', () => {
  currentActive--;
  btnUpdate();
  if (currentActive >= 0) {
    circles[currentActive + 1].classList.remove('active');
    progressBar.value -= 30;
  }
});

function btnUpdate() {
  if (currentActive === 0) prevBtn.disabled = true;
  else if (currentActive === 3) nextBtn.disabled = true;
  else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
