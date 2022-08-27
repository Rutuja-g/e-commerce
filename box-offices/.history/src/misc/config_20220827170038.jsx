const API_BASE_URL = 'https://api.tvmaze.com';

async function apiGet() {
  const response = fetch(`$ {API_BASE_URL} /search/shows?q=${input}`).then(r =>
    r.json()
  );
  fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(r => r.json())
    .then(result => {
      setResults(result);
      console.log(result);
    });
}
