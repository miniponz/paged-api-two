const SEARCH_CITY_URL = 'https://api.setlist.fm/rest/1.0/search/setlists';

export default function makeCityUrl(queryOptions) {
    const url = new URL(SEARCH_CITY_URL);
    url.searchParams.set('artistName', queryOptions.artistName);
    url.searchParams.set('cityName', queryOptions.cityName);
    url.searchParams.set('p', queryOptions.p);

    return url.toString();
}