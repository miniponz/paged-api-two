export function writeSearchToQuery(existingQuery, cityName) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('artistName', 'phish');
    searchParams.set('cityName', cityName);
    searchParams.set('p', 1);

    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('artistName', 'phish');
    searchParams.set('cityName', 'portland');
    searchParams.set('p', page);

    return searchParams.toString();
}

export function readOptions(query) {
    const searchParams = new URLSearchParams(query);
    const existingQuery = {
        artistName: searchParams.get('artistName'),
        cityName: searchParams.get('cityName'),
        p: parseInt(searchParams.get('p'))
    };
    return existingQuery;
}