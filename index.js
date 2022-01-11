function receivesAFunction (callback) {
    return callback();
  }
receivesAFunction()


function returnsANamedFunction() {
    const randFunc = () => 'this is a test'
    return randFunc 
}
returnsANamedFunction()

function returnsAnAnonymousFunction() {
   return () => 'this is a test'
}