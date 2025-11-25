/* Q9 — Event Loop Debug & Prediction
   - Show predicted order in comments and also print it
   - Then run the snippet and display results
*/

function runQ9() {
  const out = document.getElementById('output');
  out.innerText = 'Q9 — Event Loop Debugging\n';
  console.group('Q9');

  function log(msg) {
    out.innerText += msg + '\n';
    console.log(msg);
  }

  log('Prediction (before running):');
  log('1) Script start');
  log('2) Script end');
  log('3) Promise callback (microtask)');
  log('4) Timeout callback (macrotask)\n');

  log('Running snippet now:\n');

  log('Script start');

  setTimeout(() => {
    log('Timeout callback'); // macrotask
  }, 0);

  Promise.resolve().then(() => {
    log('Promise callback'); // microtask
  });

  log('Script end');

  log('\nExplanation: Promises (microtasks) run after the current stack completes but BEFORE macrotasks like setTimeout. This is why the Promise callback appears before the timeout callback.');

  console.groupEnd();
}
