const currencies = new Map([
    ['USD', 'united state dollar'],
    ['EUR', 'euro'],
    ['GBP', 'pound sterling'],
]);
currencies.forEach(function(value, key, map) {
    console.log('${value}: ${key}');
})

const currencies1 = new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR']);
console.log(currencies);
currencies.forEach(function(value, _, map) {
    console.log('${value}: ${key}');
})