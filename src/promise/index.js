const somethingWillHappen = () => {
  return new Promise ((resolve, reject) => {
    if(true){
      resolve('a huevo que sí');
    } else {
      reject('No se pudo bro');
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.log(err));





const somethingHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => {
        resolve ('x2')
      }, 1000);
    } else {
      const error = new Error('tampoco bro')
      reject (error);
    }
  })
}

somethingHappen2()
  .then(response => console.log(response))
  .catch(err => console.log(err));




  Promise.all([somethingWillHappen(), somethingHappen2()])
    .then( response => {
      console.log('Array of results', response);
    })
    .catch(err => {
      console.error(err);
    })