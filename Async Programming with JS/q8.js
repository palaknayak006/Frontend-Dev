/* Q8 — Retry Mechanism for submitOrder()
   - submitOrder fails 50% time
   - processOrder tries up to 3 times
*/

function runQ8() {
  const out = document.getElementById('output');
  out.innerText = 'Q8 — Attempting to submit order with retry logic...\n';
  console.group('Q8');

  function log(msg) {
    out.innerText += msg + '\n';
    console.log(msg);
  }

  function submitOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) return reject(new Error('Random failure'));
        resolve('Order submitted successfully');
      }, 700);
    });
  }

  async function processOrder() {
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        await submitOrder();
        log(`Attempt ${attempt}: Success`);
        return;
      } catch (err) {
        log(`Attempt ${attempt}: Failed`);
        if (attempt === maxAttempts) throw new Error('Order could not be processed');
        // optional: small delay before retry
        await new Promise(r => setTimeout(r, 300));
      }
    }
  }

  processOrder()
    .then(() => log('✅ Order processed successfully'))
    .catch(err => log('❌ ' + err.message))
    .finally(() => console.groupEnd());
}
