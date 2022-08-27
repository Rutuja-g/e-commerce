/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable no-console */
const API_BASE_URL = 'https://api.tvmaze.com';

async function apiGet(queryString) {
  const response = await fetch(`$ {API_BASE_URL} ${queryString}`).then(r =>
    r.json()
  );
  return response;
}
