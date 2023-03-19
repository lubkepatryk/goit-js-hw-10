export const fetchCountries = (name) {
    const url = `https://restcountries.com/v3.1/all?fields=name.official,capital,population,flags.svg,languages`;

    return fetch(url)
    .then((response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
        throw new Error(error.message);
    });
  };