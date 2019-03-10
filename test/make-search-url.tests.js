const test = QUnit.test;

QUnit.module('url tests');

import makeCityUrl from '../src/make-search-url.js';

test('url includes artist name, city name, and page', assert => {
//arrange
    const queryOptions = {
        artistName: 'phish',
        cityName: 'portland',
        p: 1
    };
//act
    const expected = 'https://api.setlist.fm/rest/1.0/search/setlists?artistName=phish&cityName=portland&p=1';
    const url = makeCityUrl(queryOptions);
//assert
    assert.equal(url, expected);
});

// curl -X GET --header 'Accept: application/json' --header 'x-api-key: 3db2f63f-28e5-4d34-84f7-763e7c338be6' 'https://api.setlist.fm/rest/1.0/search/setlists?artistName=phish&cityName=portland&p=1'
