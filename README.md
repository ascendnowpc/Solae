# Solae

Mock portfolio + store for SOLAE, a swim label by teens, for teens.

- `index.html`: homepage
- `product.html?p=<id>`: product page (ids: `tidepool`, `cabana`, `off-shoulder`, `flounce`, `boardwalk`, `drift`, `white-one`, `shoreline`)
- `design-system.html`: tokens, type, frames, components and where each section comes from
- `assets/css/tokens.css`: colours, fluid type and spacing, frame masks
- `assets/css/solae.css`: base, frames, components, sections
- `assets/js/solae.js`: product data, catalog filter, bag drawer, product page

Run it locally from this folder:

```
python -m http.server 8642
```

Then open http://localhost:8642.

Photos are free-licence stand-ins from Pexels and Unsplash, loaded from their CDNs. Swap them for your own shoot before launch. k2o's Moslin and TT Turns are licensed fonts, so free Google stand-ins (Unbounded, Inter) render for now.
