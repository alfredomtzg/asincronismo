const doSomethingAsync = () => {
  return new Promise((resolve, reject) =>{
    (true)
    ? setTimeout(()=> resolve('Do Somenthing Async'),2000)
    : reject(new Error('Test error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something);
}

console.log('Before');
doSomething();
console.log('After');