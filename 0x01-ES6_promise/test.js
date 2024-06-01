let p2 = Promise.resolve(222);
let p1 = Promise.reject(111);
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 3333);
})

Promise.race([p3, p2, p1]).then((res) => {
  console.log('winning', res);
}).catch((res) => {
  console.log('Failed', res);
})
