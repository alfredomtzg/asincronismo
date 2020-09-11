const doSomethingAsync = () => {
  return new Promise((resolve, reject) =>{
    (true)
    ? setTimeout(()=> resolve('Do Somenthing Async'),3000)
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


const anotherFuncion = async () => {
  try {
    const something = await doSomethingAsync()
    console.log(something);
  } catch (error) {
    console.error(error)
  }
}

console.log('Before 1');
anotherFuncion();
console.log('After 1');