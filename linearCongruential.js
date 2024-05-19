let a = 48271;
let g = 31;
let m = parseInt((Math.pow(2,g)) - 1);
let c = 0;
let xi = Date.now() * 10000 + 621355968000000000;

function LinearCongruential() {
  xi = ((a * xi) + c) % m;
  let ri = xi / (m - 1)
  return ri;
}
for (let i = 0; i < 100; i++) {
  console.log(LinearCongruential());
}
