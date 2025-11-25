/* Q6 — Fake Store API: Fetch Products
   - Fetch https://fakestoreapi.com/products
   - Log: Product Title, Price, Image URL
   - Handle errors with try/catch and show friendly message
*/

function runQ6() {
  const out = document.getElementById('output');
  out.innerText = 'Q6 — Loading products...\n';
  console.group('Q6');

  function log(msg) {
    out.innerText += msg + '\n';
    console.log(msg);
  }

  async function loadProducts() {
    const url = 'https://fakestoreapi.com/products';
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network response not ok: ' + res.status);
      const products = await res.json();

      log(`✅ Loaded ${products.length} products\n`);
      // Log each product (concise)
      products.forEach(p => {
        log(`Product: ${p.title}`);
        log(`Price: $${p.price}`);
        log(`Image: ${p.image}`);
        log('---');
      });

      // BONUS: build simple product cards inside the output (appended HTML)
      const containerId = 'product-cards';
      // remove previous cards if any
      const previous = document.getElementById(containerId);
      if (previous) previous.remove();

      const cards = document.createElement('div');
      cards.id = containerId;
      cards.style.display = 'grid';
      cards.style.gridTemplateColumns = 'repeat(auto-fill,minmax(220px,1fr))';
      cards.style.gap = '10px';
      cards.style.marginTop = '12px';

      products.slice(0, 8).forEach(p => { // show up to 8 cards
        const card = document.createElement('div');
        card.style.background = '#0b0b0b';
        card.style.border = '1px solid #033';
        card.style.padding = '8px';
        card.style.borderRadius = '8px';
        card.style.color = '#fff';
        card.innerHTML = `
          <div style="height:140px;display:flex;align-items:center;justify-content:center;overflow:hidden">
            <img src="${p.image}" alt="${p.title}" style="max-width:100%;max-height:140px;object-fit:contain" />
          </div>
          <h4 style="font-size:14px;margin:8px 0 4px">${p.title}</h4>
          <div style="font-weight:bold">$${p.price}</div>
        `;
        cards.appendChild(card);
      });

      document.getElementById('output').appendChild(cards);

    } catch (err) {
      log('❌ Failed to load products. Please try again.');
      console.error(err);
    } finally {
      console.groupEnd();
    }
  }

  loadProducts();
}
