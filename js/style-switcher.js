/*----------------- toggle style switcher -----------------*/
const StyleSwitcherToggle = document.querySelector('.style-switcher-toggle');
StyleSwitcherToggle.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
});

/*----------hide style switcher scroll*/
window.addEventListener('scroll', () => {
  if (document.querySelector('.style-switcher').classList.contains('open')) {
    document.querySelector('.style-switcher').classList.remove('open');
  }
});

/*------------------- theme color ----------------------------*/
const AlternateStyle = document.querySelectorAll('.alternate-style');
function SetActivesStye(color) {
  AlternateStyle.forEach((style) => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  });
}

/*------------------------ theme light and dark mode ----------------------------*/
const DayNight = document.querySelector('.day-night');
DayNight.addEventListener('click', () => {
  DayNight.querySelector('i').classList.toggle('fa-sun');
  DayNight.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
});

window.addEventListener('load', () => {
  if (document.body.classList.contains('dark')) {
    DayNight.querySelector('i').classList.add('fa-sun');
  } else {
    DayNight.querySelector('i').classList.add('fa-moon');
  }
});











