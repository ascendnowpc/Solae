/* ==========================================================================
   SOLAE — mock storefront behaviour
   Product data, catalog filter, cart drawer, rails, product page.
   Photography: Pexels (free licence) — stand-ins until the real shoot.
   ========================================================================== */

const PX = (id, w = 1200) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/* ---- Icons ------------------------------------------------------------ */
const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <symbol id="i-sun" viewBox="0 0 170 40">
    <path fill="currentColor" d="M2 20.6L118 17.6V22.4Z"/>
    <circle cx="146" cy="20" r="8.5" fill="currentColor"/>
    <g stroke="currentColor" stroke-width="4.2" stroke-linecap="round"><path d="M146 2.5V7M146 33V37.5M128.5 20H133M159 20H163.5M133.6 7.6L136.8 10.8M155.2 29.2L158.4 32.4M133.6 32.4L136.8 29.2M155.2 10.8L158.4 7.6"/></g>
  </symbol>
  <symbol id="i-sun-solo" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="8.5" fill="currentColor"/>
    <g stroke="currentColor" stroke-width="4.2" stroke-linecap="round"><path d="M20 2.5V7M20 33V37.5M2.5 20H7M33 20H37.5M7.6 7.6L10.8 10.8M29.2 29.2L32.4 32.4M7.6 32.4L10.8 29.2M29.2 10.8L32.4 7.6"/></g>
  </symbol>
  <symbol id="i-squiggle" viewBox="0 0 72 16">
    <path d="M2 8Q8 1 14 8T26 8T38 8T50 8T62 8T72 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </symbol>
  <symbol id="i-wave" viewBox="0 0 220 80">
    <path d="M10 40Q32 6 55 40T100 40T145 40T190 40" fill="none" stroke="currentColor" stroke-width="13" stroke-linecap="round"/>
    <path d="M30 66Q52 40 75 66T120 66T165 66T210 66" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" opacity=".7"/>
  </symbol>
  <symbol id="i-leaf" viewBox="0 0 300 300">
    <g fill="none" stroke="currentColor" stroke-linecap="round">
      <path stroke-width="7" d="M40 290Q120 170 270 40"/>
      <g stroke-width="16">
        <path d="M92 214Q60 176 30 170"/><path d="M92 214Q120 232 132 270"/>
        <path d="M128 172Q96 128 66 118"/><path d="M128 172Q160 184 178 226"/>
        <path d="M166 132Q140 88 110 72"/><path d="M166 132Q198 142 220 180"/>
        <path d="M204 94Q186 56 160 36"/><path d="M204 94Q232 98 254 130"/>
        <path d="M238 64Q228 36 214 18"/><path d="M238 64Q258 64 280 84"/>
      </g>
    </g>
  </symbol>
</svg>`;

/* ---- Data --------------------------------------------------------------- */
const C = {
  lagoon:  { name: "lagoon",        dot: "#17BEBB" },
  brick:   { name: "brick",         dot: "#B40421" },
  jasmine: { name: "jasmine",       dot: "#F8E077" },
  deep:    { name: "deep teal",     dot: "#07494A" },
  sky:     { name: "blue grey",     dot: "#6699CC" },
  turf:    { name: "turf",          dot: "#337155" },
  coral:   { name: "coral",         dot: "#F07167" },
  ocean:   { name: "ocean",         dot: "#0471A6" },
  hibiscus:{ name: "hibiscus",      dot: "#EC0868" },
  willow:  { name: "willow",        dot: "#93C186" },
  marigold:{ name: "marigold",      dot: "#FFAB4C" },
  lilac:   { name: "lilac",         dot: "#B9A6C9" },
  cabana:  { name: "cabana stripe", dot: "linear-gradient(90deg,#B40421 0 33%,#FFFDF2 0 66%,#B40421 0)" },
  white:   { name: "white",         dot: "#FFFFFF" },
  black:   { name: "black",         dot: "#1E2626" },
  sand:    { name: "sand",          dot: "#FFECD1" },
};

const PRODUCTS = [
  { id: "tidepool", name: "the tidepool one-piece", cat: "swimsuits", type: "swimsuit", price: 2799,
    img: "31094963", pos: "80% 30%", alt: "a lagoon-blue one-piece swimsuit, worn", gallery: ["31094963", "29957708"],
    badges: [["new", "sun"]], colors: ["lagoon", "lilac", "brick", "deep"],
    blurb: "our everyday one-piece. plain, double-lined and scooped just right — with removable pads held in by a second layer of fabric, so nothing shifts when you dive in." },
  { id: "cabana", name: "the cabana suit", cat: "swimsuits", type: "swimsuit", price: 2599,
    img: "5405652", pos: "40% 50%", alt: "a red and white striped swimsuit laid flat with a straw bag", gallery: ["5405652", "5405653"],
    badges: [["bestseller", "ink"]], colors: ["cabana", "sky", "turf", "coral"],
    blurb: "our stripe, borrowed from a beach umbrella. light padding, adjustable straps, and a scoop back that hides tan lines." },
  { id: "off-shoulder", name: "the off-shoulder", cat: "swimsuits", type: "signature swimsuit", price: 3199,
    img: "28681540", pos: "50% 30%", alt: "a black off-the-shoulder one-piece, worn standing in the sea", gallery: ["28681540", "28681548"],
    badges: [["signature 01", "coral"]], colors: ["black", "coral", "ocean"],
    blurb: "one of our two signature styles. a soft off-the-shoulder neckline with a hidden silicone grip, so it stays exactly where you put it." },
  { id: "flounce", name: "the flounce", cat: "swimsuits", type: "signature swimsuit", price: 3199,
    img: "4271771", pos: "50% 40%", alt: "a blue-grey one-piece with ruffled flounce straps, laid flat", gallery: ["4271771", "27330805"],
    badges: [["signature 02", "coral"]], colors: ["sky", "hibiscus", "willow"],
    blurb: "our second signature: soft flounces on the straps, finished with a basting stitch down the middle. you told us you wanted it, so it stayed." },
  { id: "boardwalk", name: "the boardwalk short", cat: "shorts", type: "knee-length short", price: 1499,
    img: "3998649", pos: "50% 60%", alt: "swim shorts and suits laid out flat on a wooden floor", gallery: ["3998649", "25649794"],
    badges: [["matches every suit", "sun"]], colors: ["lagoon", "coral", "white", "black"],
    blurb: "knee-length (or just above), quick-dry and made to match your suit — or keep it classic in white or black." },
  { id: "drift", name: "the drift cover-up", cat: "cover-ups", type: "cover-up", price: 1999,
    img: "35126783", pos: "50% 35%", alt: "a sheer yellow cover-up worn on a tropical beach", gallery: ["35126783", "36173873"],
    badges: [["new", "sun"]], colors: ["jasmine", "lagoon", "coral"],
    blurb: "a breezy kaftan that comes in a print to match each suit. throw it on for the walk from the water to lunch." },
  { id: "white-one", name: "the white one", cat: "cover-ups", type: "cover-up", price: 2199,
    img: "15560782", pos: "50% 30%", alt: "a long white lace cover-up worn on a misty beach", gallery: ["15560782", "8371478"],
    badges: [["goes with everything", "ink"]], colors: ["white"],
    blurb: "the one white cover-up in the collection — lace-light and long, made to go over every single suit we make." },
  { id: "shoreline", name: "the shoreline skirt", cat: "skirts", type: "cover-up skirt", price: 1299,
    img: "7292976", pos: "50% 40%", alt: "a long plain green cover-up skirt worn at the shoreline", gallery: ["7292976", "7292977"],
    badges: [], colors: ["turf", "sand", "white", "deep"],
    blurb: "a plain wrap skirt to throw over your suit on the walk to the beach. ties at the side, folds into your tote." },
];

const SIZES = ["xs", "s", "m", "l", "xl"];
const SHIP_FREE = 2999;
const inr = n => "₹" + n.toLocaleString("en-IN");
const byId = id => PRODUCTS.find(p => p.id === id);
const dot = k => C[k].dot;

const photo = (p, { w = 900, cls = "frame", id = p.img, alt = p.alt } = {}) =>
  `<div class="${cls}"><img src="${PX(id, w)}" alt="${alt}" loading="lazy" style="object-position:${p.pos}"></div>`;

const ICON = {
  plus: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
};

function card(p) {
  const badges = p.badges.map(([t, tone]) => `<span class="badge badge--${tone}">${t}</span>`).join("");
  const sw = p.colors.map(k => `<span class="swatch" style="--c:${dot(k)}" title="${C[k].name}"></span>`).join("");
  return `<article class="card reveal" data-cat="${p.cat}">
    <div class="card__media">
      ${photo(p, { cls: "frame-wavy", w: 700 })}
      <div class="card__badges">${badges}</div>
    </div>
    <h3 class="card__name"><a href="product.html?p=${p.id}">${p.name}</a></h3>
    <p class="card__price">${inr(p.price)}</p>
    <div class="swatches" aria-label="colours: ${p.colors.map(k => C[k].name).join(", ")}">${sw}</div>
    <button class="btn btn--ghost btn--sm card__add" type="button" data-add="${p.id}" aria-label="add ${p.name} to bag">${ICON.plus}add to bag</button>
  </article>`;
}

/* ---- Cart --------------------------------------------------------------- */
const CART_KEY = "solae-cart-v2";
let cart = [];
try { cart = (JSON.parse(localStorage.getItem(CART_KEY)) || []).filter(l => byId(l.id)); } catch { cart = []; }
const save = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {} };

function addToCart(id, color, size = "m", extra = "") {
  const p = byId(id); if (!p) return;
  color = color || p.colors[0];
  const key = [id, color, size, extra].join("|");
  const line = cart.find(l => l.key === key);
  line ? line.qty++ : cart.push({ key, id, color, size, extra, qty: 1 });
  save(); renderCart(); toast(`${p.name} added to your bag`);
}

function renderCart() {
  const count = cart.reduce((n, l) => n + l.qty, 0);
  const total = cart.reduce((n, l) => n + l.qty * byId(l.id).price, 0);
  document.querySelectorAll("[data-cart-count]").forEach(el => { el.textContent = count; el.classList.toggle("is-on", count > 0); });
  const items = document.querySelector("[data-cart-items]");
  if (!items) return;
  const left = SHIP_FREE - total;
  document.querySelector("[data-ship-msg]").innerHTML = total === 0
    ? `spend ${inr(SHIP_FREE)} for free shipping across india`
    : left > 0 ? `you're <b>${inr(left)}</b> away from free shipping` : `<b>you've unlocked free shipping</b> ☀`;
  document.querySelector("[data-ship-bar]").style.setProperty("--p", Math.min(100, (total / SHIP_FREE) * 100) + "%");
  document.querySelector("[data-cart-total]").textContent = inr(total);
  document.querySelector("[data-cart-foot]").hidden = count === 0;
  items.innerHTML = count === 0
    ? `<div class="drawer__empty"><p class="t-hand">nothing yet</p><p>the sun is out though.</p><a class="btn btn--ink btn--sm" href="index.html#catalog">shop drop 01</a></div>`
    : cart.map(l => {
        const p = byId(l.id);
        return `<div class="line">
          ${photo(p, { w: 200, alt: "" })}
          <div><p class="line__name">${p.name}</p>
            <p class="line__meta">${C[l.color].name} · ${l.size.toUpperCase()}${l.extra ? " · " + l.extra : ""}</p>
            <div class="qty"><button type="button" data-qty="-1" data-key="${l.key}" aria-label="decrease">−</button><span>${l.qty}</span><button type="button" data-qty="1" data-key="${l.key}" aria-label="increase">+</button></div>
          </div>
          <b>${inr(p.price * l.qty)}</b>
        </div>`;
      }).join("");
}

function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.append(t); }
  t.textContent = msg; t.classList.add("is-on");
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("is-on"), 2200);
}

function openPanel(sel, open) {
  const panel = document.querySelector(sel);
  if (!panel) return;
  panel.classList.toggle("is-open", open);
  if (sel === ".drawer") document.querySelector(".scrim")?.classList.toggle("is-open", open);
  document.body.style.overflow = open ? "hidden" : "";
  if (open) panel.querySelector("button, a")?.focus();
}

/* ---- Page wiring -------------------------------------------------------- */
document.body.insertAdjacentHTML("afterbegin", SPRITE);

document.querySelectorAll("[data-products]").forEach(el => {
  const ids = el.dataset.products ? el.dataset.products.split(",") : PRODUCTS.map(p => p.id);
  el.innerHTML = ids.map(id => card(byId(id))).join("");
});

/* Catalog map filter */
document.querySelectorAll("[data-filter]").forEach(btn => btn.addEventListener("click", () => {
  const on = btn.getAttribute("aria-pressed") !== "true";
  document.querySelectorAll("[data-filter]").forEach(b => b.setAttribute("aria-pressed", "false"));
  btn.setAttribute("aria-pressed", on);
  document.querySelectorAll("#catalog .card").forEach(c => { c.hidden = on && c.dataset.cat !== btn.dataset.filter; });
}));

document.addEventListener("click", e => {
  const t = e.target.closest("button, a");
  if (!t) return;
  if (t.dataset.add) addToCart(t.dataset.add);
  if (t.dataset.qty) {
    const l = cart.find(x => x.key === t.dataset.key);
    l.qty += +t.dataset.qty; if (l.qty <= 0) cart = cart.filter(x => x !== l);
    save(); renderCart();
  }
  if (t.matches("[data-open-cart]")) { e.preventDefault(); openPanel(".drawer", true); }
  if (t.matches("[data-close-cart]")) openPanel(".drawer", false);
  if (t.matches("[data-open-menu]")) openPanel(".mobile-nav", true);
  if (t.matches("[data-close-menu]")) openPanel(".mobile-nav", false);
  if (t.dataset.rail) {
    const rail = document.getElementById(t.dataset.rail);
    rail.scrollBy({ left: (t.dataset.dir === "next" ? 1 : -1) * rail.clientWidth * .8, behavior: "smooth" });
  }
  if (t.matches(".checkout")) toast("this is a mock store — checkout comes next ☀");
});
document.querySelector(".scrim")?.addEventListener("click", () => openPanel(".drawer", false));
document.addEventListener("keydown", e => { if (e.key === "Escape") { openPanel(".drawer", false); openPanel(".mobile-nav", false); } });

/* Generic tabs (design system) */
document.querySelectorAll("[role=tablist]").forEach(list => {
  const tabs = [...list.querySelectorAll("[role=tab]")];
  tabs.forEach(t => t.addEventListener("click", () => tabs.forEach(x => x.setAttribute("aria-selected", x === t))));
});

const header = document.querySelector(".header");
addEventListener("scroll", () => header?.classList.toggle("is-scrolled", scrollY > 8), { passive: true });
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -6% 0px" });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

document.querySelectorAll("[data-news]").forEach(f => f.addEventListener("submit", e => { e.preventDefault(); f.reset(); toast("you're on the list — see you on the shore"); }));

renderCart();

/* ---- Product page --------------------------------------------------------- */
const pdp = document.querySelector("[data-pdp]");
if (pdp) {
  const p = byId(new URLSearchParams(location.search).get("p")) || PRODUCTS[0];
  const isSuit = p.cat === "swimsuits";
  let color = p.colors[0], size = "m", view = 0;
  const setRows = isSuit ? [byId("boardwalk"), byId("drift")] : [];
  const setState = { boardwalk: { on: false, opt: "matching" }, drift: { on: false, opt: "matching" } };
  // "match my suit" uses the suit's colour when the set piece comes in it
  const setColor = (r, opt) => opt !== "matching" ? opt : r.colors.includes(color) ? color : r.colors[0];
  const optsFor = r => r.id === "boardwalk" ? ["matching", "white", "black"] : ["matching"];
  document.title = `${p.name} — SOLAE`;
  document.querySelector("[data-crumb]") && (document.querySelector("[data-crumb]").textContent = p.name);

  const render = () => {
    const subtotal = p.price + setRows.reduce((n, r) => n + (setState[r.id].on ? r.price : 0), 0);
    pdp.innerHTML = `
    <div class="gallery">
      <div class="gallery__thumbs" role="group" aria-label="photos">
        ${p.gallery.map((g, i) => `<button type="button" data-view="${i}" aria-pressed="${i === view}" aria-label="photo ${i + 1}">${photo(p, { id: g, w: 200, alt: "" })}</button>`).join("")}
      </div>
      <div class="gallery__main">
        ${p.badges.map(([t, tone]) => `<span class="badge badge--${tone}">${t}</span>`).join("")}
        ${photo(p, { id: p.gallery[view], cls: "frame-wavy", w: 1400 })}
        <p class="t-hand" aria-hidden="true">made to stay put</p>
      </div>
    </div>
    <div class="buy">
      <div class="buy__title">
        <p class="t-tag">${p.type} · drop 01</p>
        <h1 class="t-headline">${p.name}</h1>
        <div class="buy__price"><span>${inr(p.price)}</span><span class="stars" aria-label="4.9 out of 5">★★★★★ <span class="t-mute">4.9 · 128 reviews</span></span></div>
      </div>
      <p class="t-lead t-soft">${p.blurb}</p>
      <div class="opt">
        <div class="opt__label"><span>colour: <b>${C[color].name}</b></span></div>
        <div class="swatches" role="radiogroup" aria-label="colour">
          ${p.colors.map(k => `<button type="button" class="swatch swatch--lg" role="radio" aria-checked="${k === color}" aria-label="${C[k].name}" data-color="${k}" style="--c:${dot(k)}"></button>`).join("")}
        </div>
      </div>
      <div class="opt">
        <div class="opt__label"><span>size: <b>${size.toUpperCase()}</b></span><button type="button" data-fit>size &amp; fit guide</button></div>
        <div class="sizes" role="radiogroup" aria-label="size">
          ${SIZES.map(s => `<button type="button" class="size" role="radio" aria-checked="${s === size}" data-size="${s}">${s.toUpperCase()}</button>`).join("")}
        </div>
      </div>
      ${setRows.length ? `
      <div class="opt">
        <div class="opt__label"><span><b>complete the set</b></span><span class="t-mute">optional</span></div>
        <div class="set">
          ${setRows.map(r => {
            const st = setState[r.id];
            return `<div class="set__row">
              ${photo(r, { w: 200, alt: "" })}
              <div>
                <p class="line__name">${r.name}</p>
                <p class="line__meta">${inr(r.price)} · ${C[setColor(r, st.opt)].name}</p>
                <div class="chips" role="radiogroup" aria-label="${r.name} colour">
                  ${optsFor(r).map(o => `<button type="button" class="chip" role="radio" aria-checked="${st.opt === o}" data-set="${r.id}" data-opt="${o}"><i style="--c:${o === "matching" ? dot(color) : dot(o)}"></i>${o === "matching" ? "match my suit" : o}</button>`).join("")}
                </div>
              </div>
              <input class="check" type="checkbox" aria-label="add ${r.name}" data-set-on="${r.id}" ${st.on ? "checked" : ""}>
            </div>`;
          }).join("")}
        </div>
      </div>` : ""}
      <div class="buy__cta">
        <button class="btn" type="button" data-buy>add to bag — ${inr(subtotal)}</button>
        <button class="icon-btn icon-btn--outline" type="button" aria-label="save to wishlist" style="width:3.4rem;height:3.4rem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/></svg></button>
      </div>
      <div class="perks">
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/></svg>free shipping over ${inr(SHIP_FREE)}</div>
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4"/></svg>easy 14-day exchanges</div>
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3c3 3.5 6 6.6 6 10a6 6 0 0 1-12 0c0-3.4 3-6.5 6-10Z"/></svg>chlorine &amp; salt resistant</div>
      </div>
      <div class="acc">
        <details open><summary>details</summary><div><ul>
          ${isSuit ? "<li>double-lined, fully opaque when wet</li><li>small removable pads, held in place by a second layer of fabric</li>" : ""}
          ${p.cat === "shorts" ? "<li>knee-length, or just above — no riding up</li><li>matches every suit, or pick white or black</li>" : ""}
          ${["cover-ups", "skirts"].includes(p.cat) ? "<li>light, quick-dry woven fabric</li><li>made to wear over your suit on the walk to the beach</li>" : ""}
          <li>78% recycled nylon, 22% elastane</li><li>designed by teens in india</li></ul></div></details>
        <details><summary>fit &amp; pads</summary><div>true to size. if you're between sizes, size up for more coverage. the pads are small and slip out through an inner opening — the second fabric layer keeps them flat and in place while you swim.</div></details>
        <details><summary>care</summary><div>rinse in cool fresh water after every swim. hand wash, dry flat in the shade. no tumble dry, no bleach.</div></details>
        <details><summary>shipping &amp; exchanges</summary><div>ships in 2–4 days across india. free over ${inr(SHIP_FREE)}. unworn pieces with hygiene liner intact can be exchanged within 14 days.</div></details>
      </div>
    </div>`;
  };
  render();

  pdp.addEventListener("click", e => {
    const t = e.target.closest("button, input"); if (!t) return;
    if (t.dataset.view) view = +t.dataset.view;
    else if (t.dataset.color) color = t.dataset.color;
    else if (t.dataset.size) size = t.dataset.size;
    else if (t.dataset.set) { setState[t.dataset.set].opt = t.dataset.opt; setState[t.dataset.set].on = true; }
    else if (t.dataset.setOn) setState[t.dataset.setOn].on = t.checked;
    else if (t.matches("[data-fit]")) return toast("size guide coming soon — we're measuring everything twice");
    else if (t.matches("[data-buy]")) {
      addToCart(p.id, color, size);
      setRows.forEach(r => {
        const st = setState[r.id]; if (!st.on) return;
        addToCart(r.id, setColor(r, st.opt), size, st.opt === "matching" ? "matching set" : "");
      });
      return openPanel(".drawer", true);
    } else return;
    const key = t.dataset.view ? ["view", t.dataset.view] : t.dataset.color ? ["color", t.dataset.color] : t.dataset.size ? ["size", t.dataset.size] : null;
    render();
    if (key) pdp.querySelector(`[data-${key[0]}="${key[1]}"]`)?.focus();
  });
}
