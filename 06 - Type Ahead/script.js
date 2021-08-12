const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint) //returns promies
  .then((blob) => blob.json()) //returns unformated data, which has a json-function, which returns a promise
  .then((data) => {
    cities.push(...data);
    /*     const matches = findMatches('bos', cities);
    console.log(matches); */
  }); //here comes the json data. We spread the data into the cities array to put every element in the data-array into the cities array. pushing data itself will add it as an array to cities index 0

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    /* 
    //Wes does a regexp here
    const regex = new RegExp(wordToMatch, 'gi'); //global, case insensitive
    return place.city.match(regex) || place.state.match(regex); */
    const city = place.city.toLowerCase();
    const state = place.state.toLowerCase();
    return city.includes(wordToMatch) || state.includes(wordToMatch);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    })
    .join('');

  suggestions.innerHTML = html;
}

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('change', displayMatches);

//console.log(cities);
