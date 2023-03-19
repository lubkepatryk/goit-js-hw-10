import './css/styles.css';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const textInput = document.querySelector('#search-box');

textInput.addEventListener('input', event => {
  fetchCountries;
});
