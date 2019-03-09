import data from '../data/sample-data.js';
import makeSetlistTemplate from './make-header-template.js';
import { readOptions } from './hash-query.js';
import { updateCityName } from './search-component.js';

makeSetlistTemplate(data);

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readOptions(query);
    console.log(queryOptions);
    updateCityName(queryOptions.cityName);
});


//NEXT STEP IS MAKE FUNCTION TO CREATE SEARCH URL. equivalent from mob build is "makeSearchMovieUrl()"//