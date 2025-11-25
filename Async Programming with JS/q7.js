/* Q7 — Promise.allSettled() Demo
   - loadProfile: 2s
   - loadPosts: 1.5s
   - loadMessages: 1s
   - Randomly reject one Promise
   - Print successes and failures + elapsed time
*/

function runQ7() {
  const out = document.getElementById('output');
  out.innerText = 'Q7 — Starting lazy loader (allSettled)...\n';
  console.group('Q7');

  function log(msg) {
    out.innerText += msg + '\n';
    console.log(msg);
  }

  function loadProfile() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.25) reject(new Error('Profile failed'));
        else resolve('Profile Loaded');
      }, 2000);
    });
  }

  function loadPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.25) reject(new Error('Posts failed'));
        else resolve('Posts Loaded');
      }, 1500);
    });
  }

  function loadMessages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.25) reject(new Error('Messages failed'));
        else resolve('Messages Loaded');
      }, 1000);
    });
  }

  const start = Date.now();
  Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
    .then(results => {
      results.forEach((res, i) => {
        const name = ['Profile', 'Posts', 'Messages'][i];
        if (res.status === 'fulfilled') log(`✅ ${name}: ${res.value}`);
        else log(`❌ ${name}: ${res.reason.message}`);
      });
      const elapsed = Date.now() - start;
      log(`\nTotal time: ${elapsed} ms`);
    })
    .catch(err => {
      // allSettled never rejects, but include safety
      log('Unexpected error: ' + err.message);
    })
    .finally(() => console.groupEnd());
}
