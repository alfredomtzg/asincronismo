let XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {

  let xhttp = new XMLHttpRequest();
  // abrir http
  xhttp.open('GET', url_api, true);
  // escuchar lo que va a hacer ésta petición con una función que 
  // va a recibir un evento
  xhttp.onreadystatechange = function (event) {
    // validamos la informacion con if
    if(xhttp.readyState === 4){
      // igualdad a que se resolvió con status 200
      if(xhttp.status === 200) {
        // pasamos el callback y manejamos primero el error
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // manejamos el error
        const error = new Error('Error' + url_api);
        return callback(error, null);
      }
    }
  }
  xhttp.send();
}