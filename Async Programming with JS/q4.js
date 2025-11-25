/* Q4 — DevOps Delay: Promise.all() & Promise.race()
   - Server A: responds in 2s
   - Server B: responds in 3s
   - Simulate random failure
*/
function runQ4() {
  const out = document.getElementById('output');
  out.innerText = 'Q4 — Deployment check started...\n';
  console.group('Q4');

  function log(msg) {
    out.innerText += msg + '\n';
    console.log(msg);
  }

  function serverA() {
    return new Promise((resolve, reject) => {
      const delay = 2000;
      setTimeout(() => {
        if (Math.random() < 0.2) return reject(new Error('Server A failed'));
        resolve(`Server A finished in ${delay}ms`);
      }, delay);
    });
  }

  function serverB() {
    return new Promise((resolve, reject) => {
      const delay = 3000;
      setTimeout(() => {
        if (Math.random() < 0.2) return reject(new Error('Server B failed'));
        resolve(`Server B finished in ${delay}ms`);
      }, delay);
    });
  }

  // Promise.all: wait for both
  Promise.all([serverA(), serverB()])
    .then(results => {
      log('✅ Deployment completed for all servers');
      results.forEach(r => log('  • ' + r));
    })
    .catch(err => log('❌ Deployment error (all): ' + err.message));

  // Promise.race: fastest responder
  Promise.race([serverA(), serverB()])
    .then(fast => log('⚡ Fastest response: ' + fast))
    .catch(err => log('⚠ Fastest responder failed: ' + err.message))
    .finally(() => {
      console.groupEnd();
    });
}
