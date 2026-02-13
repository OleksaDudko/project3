import albert from "/img/einstein.webp";
import newton from "/img/newton.webp";
import galilei from "/img/galilei.webp";
import curie from "/img/curie.webp";
import kepler from "/img/kepler.webp";
import copernicus from "/img/сopernicus.webp";
import planck from "/img/planck.webp";
import blodgett from "/img/blodgett.webp";
import lovelace from "/img/lovelace.webp";
import goode from "/img/goode.webp";
import meitner from "/img/meitner.webp";
import hammarström from "/img/hammarström.webp";

const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    img: albert,
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    img: newton,
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    img: galilei,
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    img: curie,
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    img: kepler,
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    img: copernicus,
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    img: planck,
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    img: blodgett,
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    img: lovelace,
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    img: goode,
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    img: meitner,
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    img: hammarström,
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

const listEl = document.querySelector('.scientists__list');
const btnEl = document.querySelectorAll('.scientists__btn');

function calculateAge(deathYear, birthYear) {
  return deathYear - birthYear;
}

function createItemsMarkup(array) {
  const item = array
    .map(({ name, surname,img, born, dead, }) => {
      return `
<li class="scientists__box">
      <h2>${name}</h2>
      <h3>${surname}</h3>
              <img src="${img}" alt="" srcset="" class="scientists__picrute">
      <div class="scientists__wrap">
      <p>${born}</p>
      <p>-${dead}</p>
      </div>
    </li>`;
    })
    .join('');
  listEl.innerHTML = item;
}
btnEl.forEach(btn => {
  btn.addEventListener('click', event => {
    const action = event.currentTarget.dataset.id;
    switch (action) {
      case 'born19':
        const born = scientists.filter(
          ({ born }) => born >= 1800 && born <= 1900
        );
        createItemsMarkup(born);
        break;

      case 'alphabet':
  const alphabet = [...scientists].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  createItemsMarkup(alphabet);
  break;

      case 'yearsLived':
        const yearsLived = [...scientists].sort((a, b) => {
          const ageA = calculateAge(a.dead, a.born);
          const ageB = calculateAge(b.dead, b.born);
          return ageB - ageA;
        });
        createItemsMarkup(yearsLived);
        break;

      case 'latestBorn':
        const latestBorn = [...scientists].sort((a, b) => b.born - a.born)[0]
         listEl.innerHTML = `
    <li class="scientists__box">
      <h2>${latestBorn.name}</h2>
      <h3>${latestBorn.surname}</h3>
      <div class="scientists__wrap">
      <p>${latestBorn.born}</p>
      <p>-${latestBorn.dead}</p>
      </div>
    </li>`;
        break;

      case 'albert':
        const albert = scientists.find(({ id }) => id === 1);
        if (albert){
          listEl.innerHTML = `
      <li class="scientists__box">
      <h2>${albert.name}</h2>
      <h3>${albert.surname}</h3>
      <p class="scientists__a">Albert Einshtein народився: ${albert.born}</p>
    </li>`;
        }
        break;

      case 'surNameC':
        const surNameC = scientists.filter(({ surname }) =>
          surname.startsWith('C')
        );
        createItemsMarkup(surNameC);
        break;

      case 'nameA':
        const nameA = scientists.filter(({ name }) => name.startsWith('A'));
        createItemsMarkup(nameA);
        break;

      case 'livedLongest':
       const livedLongest = [...scientists].sort((a, b) => {
          const ageA = calculateAge(a.dead, a.born);
          const ageB = calculateAge(b.dead, b.born);
          const rez = ageB - ageA;
          return rez
        })
        const ageA = livedLongest[0];
        const ageB = livedLongest[livedLongest.length-1]
        createItemsMarkup([ageA, ageB]);
        break;

      case 'coincidebnce':
        const coincidebnce = scientists.filter(
          ({ name, surname }) => name[0] === surname[0]
        );
        createItemsMarkup(coincidebnce);
        break;
    }
  });
});
createItemsMarkup(scientists);
