let XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;

const fetchData =  (url_api) => {
  return new Promise((resolve,reject) => {
    const xhttp = new XMLHttpRequest();
    // abrir http
    xhttp.open('GET', url_api, true);
    // escuchar lo que va a hacer ésta petición con una función que 
    // va a recibir un evento
    xhttp.onreadystatechange =  (() => {
      // validamos la informacion con if
      if(xhttp.readyState === 4){
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject (new Error('Error' + url_api))

      }
    })
    xhttp.send();
  });
}

module.exports = fetchData;