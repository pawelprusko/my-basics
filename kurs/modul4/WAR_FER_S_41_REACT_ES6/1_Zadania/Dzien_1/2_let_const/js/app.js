for (var i = 0; i < 11; i++) {
    console.log(i);
}
console.log(i); // pokazuje jako 11, czyli kolejny

for (let j = 0; j < 11; j++) {
    console.log(j);
}
console.log(j); // bo ma zasięg tylko blokowy, dlatego error