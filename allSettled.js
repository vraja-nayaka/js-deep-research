// own implementation of AllSettled method

const sleep = (ms, shouldReject) => {

  return Promise((resolve, reject) => {
    setTimeout(() => {

      if (shouldReject) {
        return reject();
      }

      resolve();
    }, ms)
  })
};

const myAllSettled = (promises) => {

  return new Promise((resolve, reject) => {
    const data = [];
    let promiseCount = 0;

    promises.forEach((promise, index) => {
      promise.then((result) => {
        data[index] = result;
      }
      ).catch((error) => {
        data[index] = error;
      })
        .finally(() => {
          promiseCount++;

          if (promiseCount === promises.length) {
            resolve(data);
          }
        })
    })
  })
}

myAllSettled([sleep(1000), sleep(2000, true), sleep(3000)]).then(values => {
  console.log(values)
})
