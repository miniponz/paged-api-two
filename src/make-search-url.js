const SEARCH_CITY_URL = 'https://api.setlist.fm/rest/1.0/search/setlists';
const X_API_KEY = '3db2f63f-28e5-4d34-84f7-763e7c338be6';

export default function makeCityUrl(queryOptions) {
    const url = new URL(SEARCH_CITY_URL);
    url.searchParams.set('artistName', queryOptions.artistName);
    url.searchParams.set('cityName', queryOptions.cityName);
    url.searchParams.set('p', queryOptions.p);

    return url.toString();
}