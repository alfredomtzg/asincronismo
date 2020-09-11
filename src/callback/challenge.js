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

fetchData(API,function (error1,data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function(error2, data2) {
    if(error2) return console.error(error2);
    fetchData(data2.origin.url, function(error3,data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  })
})