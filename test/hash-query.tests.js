import { writePageToQuery, writeSearchToQuery, readOptions } from '../src/hash-query.js';
const test = QUnit.test;

QUnit.module('hash query tests');
test('writing search to empty query changes query', assert => {
    //arrange
    const existingQuery = '';
    const cityName = 'portland';
    //act
    const query = writeSearchToQuery(existingQuery, cityName);
    //assert
    assert.equal(query, 'artistName=phish&cityName=portland&p=1');

});

test('writing search to existing query change query', assert => {
    //arrange
    const existingQuery = 'artistName=phish&cityName=atlanta&p=1';
    const cityName = 'portland';
    //act
    const query = writeSearchToQuery(existingQuery, cityName);
    //assert
    assert.equal(query, 'artistName=phish&cityName=portland&p=1');
});



test('writing page to query changes query', assert => {
    //arrange
    const existingQuery = 'artistName=phish&cityName=portland&p=1';
    const page = 2;
    //act
    const query = writePageToQuery(existingQuery, page);
    //assert
    assert.equal(query, 'artistName=phish&cityName=portland&p=2');
});


test('reads options from query in url', assert => {
    //arrange
    const query = 'artistName=phish&cityName=portland&p=1';
    const expected = {
        artistName: 'phish',
        cityName: 'portland',
        p: 1
    };
    //act
    const result = readOptions(query);
    //assert
    assert.deepEqual(result, expected);
});
