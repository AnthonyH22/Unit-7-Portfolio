const skillBars = document.querySelectorAll('.skill-per');

const skillBarAnimation = () => {
  skillBars.forEach((skillBar) => {
    const percentage = skillBar.innerText;
    skillBar.style.width = percentage;
    skillBar.style.opacity = 1;
  });
};

window.addEventListener('load', skillBarAnimation);