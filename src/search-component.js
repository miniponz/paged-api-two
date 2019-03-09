import { writeSearchToQuery } from './hash-query.js';

const searchForm = document.getElementById('search-form');
const citySearch = searchForm.querySelector('input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const cityName = citySearch.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, cityName);
    console.log(newQuery);
    window.location.hash = newQuery;
});