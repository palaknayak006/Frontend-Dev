/* Q5 — Callback Hell vs Async/Await
   - Pipeline: design → build → test → deploy → celebrate
   - Each stage takes 1s
   - First: nested callbacks (demo)
   - Then: async/await (clean)
*/

function runQ5() {
  const out = document.getElementById('output');
  out.innerText = 'Q5 — Running callback-hell demo followed by async/await...\n';
  console.group('Q5');

  function log(msg) {
    out.innerText += msg + '\n';
    console.log(msg);
  }

  // callback-based stage
  function stageCallback(name, cb) {
    setTimeout(() => {
      log(`➡ ${name}`);
      cb && cb();
    }, 1000);
  }

  // Promise-based stage
  function stagePromise(name) {
    return new Promise(resolve => {
      setTimeout(() => {
        log(`➡ ${name}`);
        resolve(name);
      }, 1000);
    });
  }

  // --- Part 1: callback hell (nested)
  log('--- Part 1: Callback Hell (nested) ---');
  stageCallback('design', () =>
    stageCallback('build', () =>
      stageCallback('test', () =>
        stageCallback('deploy', () =>
          stageCallback('celebrate', () => {
            log('🏁 Callback pipeline finished\n');

            // --- Part 2: async/await (clean)
            (async function runAsyncPipeline() {
              log('--- Part 2: Async/Await pipeline (clean) ---');
              try {
                await stagePromise('design');
                await stagePromise('build');
                await stagePromise('test');
                await stagePromise('deploy');
                await stagePromise('celebrate');
                log('🏁 Async/Await pipeline finished');
                log('\n// Comment: async/await flattens control flow, making async steps read like sync code and simplifying error handling with try/catch.');
              } catch (err) {
                log('❌ Pipeline failed: ' + err.message);
              } finally {
                console.groupEnd();
              }
            })();

          })
        )
      )
    )
  );
}
