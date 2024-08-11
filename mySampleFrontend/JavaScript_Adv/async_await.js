// returns a resolved promise value after asynchronous task completed
function asyncJob(x) {
  return new Promise((resolve) => resolve(x + 1));
}
// we are linking series of three asynchronous tasks
async function execAsyncJobs() {
  /*await stops the execution of 'execAsyncJobs', until the promise returned by'asyncJob(0)', is resolved.  
res1 assigned with resolved promise’s result value */
  const res1 = await asyncJob(0);
  console.log(res1);

  /* here,'asyncJob(res1)'is called, await stops execution of'execAsyncJobs', until the promise returned by'asyncJob(res1)' is resolved.  
res2 assigned with resolved promise’s result value  */
  const res2 = await asyncJob(res1);
  console.log(res2);
  /* here, asyncJob(res2) is called, await stops execution of execAsyncJobs until the promise returned by asyncJob(res2) is resolved.  
res3 assigned with resolved promise’s result value */
  const res3 = await asyncJob(res2);
  console.log(res3);
  const res4 = await asyncJob(res3);
  console.log(res4);
  Promise.all([asyncJob(0), asyncJob(1), asyncJob(2), asyncJob(3)]).then(
    (res) => {
      console.log(res);
    }
  );
  return "Jobs completed";
}
execAsyncJobs().then((res) => console.log(res));
