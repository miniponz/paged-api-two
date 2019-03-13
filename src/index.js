import makeSetlistTemplate from './make-header-template.js';
import { readOptions } from './hash-query.js';
import { updateCityName } from './search-component.js';
import makeCityUrl from './make-search-url.js';
import { updatePagingInfo } from './paging-component.js';

const prompt = document.getElementById('prompt');
const setlistContainer = document.getElementById('setlist-container');


window.addEventListener('hashchange', loadQuery);

loadQuery();

function loadQuery() {
    // clearResults();
    const query = window.location.hash.slice(1);
    const queryOptions = readOptions(query);
    // console.log(queryOptions);
    updateCityName(queryOptions.cityName);

    const url = makeCityUrl(queryOptions);

    if(!url){
        prompt.classList.remove('hidden');
        setlistContainer.classList.add('hidden');
        return;
    }
    else {
        prompt.classList.add('hidden');
        setlistContainer.classList.remove('hidden');
    }
    
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var settings = {
        'async': true,
        'crossDomain': true,
        'method': 'GET',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': '3db2f63f-28e5-4d34-84f7-763e7c338be6',
            // 'cache-control': 'no-cache'
        }
    };
    
    fetch(proxyUrl + url, settings)
        .then(res => res.json())
        .then(results => {
            console.log(results);
            makeSetlistTemplate(results);

            const pagingInfo = {
                p: results.page,
                totalPages: Math.ceil(results.total / results.itemsPerPage)
            };
            // console.log(pagingInfo);
            updatePagingInfo(pagingInfo);
        });
}

// curl -X GET --header 'Accept: application/json' --header 'x-api-key: 3db2f63f-28e5-4d34-84f7-763e7c338be6' 
// 'https://api.setlist.fm/rest/1.0/search/setlists?artistName=phish&cityName=portland&p=1'