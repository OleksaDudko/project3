import oleksii from "/img/oleksii.webp";
import sviatoslav from "/img/sviatoslav.webp";
import alina from "/img/alina.webp";
import lev from "/img/lev.webp";

console.log(oleksii);

const team = [
  {
    img: oleksii,
    name: 'Олексій',
    done: 'Team lead, секції: calculator і dinosaur',
  },
  {
    img:sviatoslav,
    name: 'Святослав',
    done: 'Scrum-master, секції: yearNumber, team і footer',
  },
  {
    img:alina,
    name: 'Аліна',
    done: 'Розробляла секції: rock, football і scientists',
  },

  {
    img: lev,
    name: 'Лев',
    done: 'Розробляв секції: header, footermodal і modal',
  },
];

const teamListRef = document.querySelector('.team__list');

function getArray({ img, name, done }) {
  return `<li class="team__item">
            <img src="${img}" alt="${name}" class="team__img">
            <h2 class="team__text">${name}</h2>
            <h3 class="team__description">${done}</h3>

          </li>`;
}

const join = team.map(getArray).join('');
teamListRef.innerHTML = join;

const teamItemRef = document.querySelectorAll(".team__item");

const teamBoxRef = document.querySelectorAll(".team__box");

const leftBtnRef = document.querySelector(".team__button-left");
const rightBtnRef = document.querySelector(".team__button-right");

let index = 0;

window.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') {
    if (index < teamItemRef.length - 1) {
      index += 1;
      moveSlider();
    }
  }

  if (event.key === 'ArrowLeft') {
    if (index > 0) {
      index -= 1;

      moveSlider();
    }
  }
});
function moveSlider() {
  const update = -index * 100;
  teamListRef.style.transform = `translateX(${update}%)`;
    console.log(update);

    teamBoxRef.forEach(box => box.classList.remove("team__active"));
  teamBoxRef[index].classList.add("team__active");
}

rightBtnRef.addEventListener('click', () => {
  if (index < teamItemRef.length - 1) {
    index += 1;
    moveSlider();
  }
});
leftBtnRef.addEventListener('click', () => {
  if (index > 0) {
    index -= 1;

    moveSlider();
  }
});


