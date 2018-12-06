const {SHA256} = require('crypto-js');

var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};
var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

console.log(' ');
console.log(`data: ${token.data.id}`);
console.log(`hash: ${token.hash}`);
console.log(`resu: ${resultHash}`);

if (resultHash === token.hash) {
    console.log('Data was not changed.');
} else {
    console.log('Data was changed. Do not trust!');
}