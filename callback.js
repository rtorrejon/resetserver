 b = (a, callback) => {
     console.log('funcion b');
     callback();
 }

 b(1, () => {
     console.log('funcion callback');
 })