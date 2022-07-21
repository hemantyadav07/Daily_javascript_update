const rest = new Map();
rest.set('name', 'starbucks');
rest.set(1, 'vishrambuag, sangli');
console.log(rest.set(2, 'kothrud, pune'));

rest
    .set('categories', ['indian', 'maharashtrian', 'punjabi', 'south indian'])
    .set('open', 10)
    .set('close', 22)
    .set(true, 'we are open :D')
    .set(false, 'we are close :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
console.log(rest);
console.log(rest.size);