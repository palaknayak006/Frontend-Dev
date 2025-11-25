/* Q10 — Delivery Pipeline
   Steps: takeOrder → prepare → pack → dispatch → deliver
   - each step: random 1–2s delay and random 15% failure
   - runPipeline uses async/await and try/catch
*/

function runQ10() {
  const out = document.getElementById('output');
  out.innerText = 'Q10 — Delivery pipeline starting...\n';
  console.group('Q10');

  function log(msg) {
    out.innerText += msg + '\n';
    console.log(msg);
  }

  function randDelay() {
    return Math.floor(Math.random() * 1000) + 1000; // 1000-2000ms
  }

  function step(name) {
    return new Promise((resolve, reject) => {
      const delay = randDelay();
      setTimeout(() => {
        if (Math.random() < 0.15) return reject(new Error(`${name} failed`));
        resolve(`${name} completed in ${delay}ms`);
      }, delay);
    });
  }

  async function runPipeline() {
    log('Start Pipeline');
    try {
      log('Step 1: Order taken');
      log(await step('takeOrder'));

      log('Step 2: Food prepared');
      log(await step('prepare'));

      log('Step 3: Package ready');
      log(await step('pack'));

      log('Step 4: Out for delivery');
      log(await step('dispatch'));

      log(await step('deliver'));
      log('✅ Delivery completed!');
    } catch (err) {
      log('❌ Pipeline failed! ' + err.message);
    } finally {
      console.groupEnd();
    }
  }

  runPipeline();
}
