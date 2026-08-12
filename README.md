# Hikaru Foundation — website

Seven static HTML pages. No build step, no dependencies, no framework. Open `index.html` or drop the folder on any host.

Only external request is Inter from Google Fonts. Everything else — icons, the node-network orb, the map panel, all imagery — is inline SVG or CSS.

---

## Pages

| File | Page | What it does |
|---|---|---|
| `index.html` | Home | Landing page. Node-orb hero with the Bangladesh map, three initiatives, mission, routes to all six other pages. |
| `about.html` | About | Mission and vision banner, origin story with a scroll-driven timeline, six values, leadership grid, governance. |
| `work.html` | Our Work | Catalogue of ten programmes across three initiatives, filterable by audience, with an onboarding roadmap. |
| `network.html` | Hikaru Layer-1 | Initiative detail. Plain-language / engineer toggle, four application tabs, spec table, phase roadmap, FAQ. |
| `news.html` | Research and updates | Featured slot, category filter, card grid, sticky subscribe sidebar. Ships with a sample/launch state toggle. |
| `involved.html` | Get Involved | Two-question route matcher across nine contribution routes, commitment ladder, honest expectations, FAQ. |
| `contact.html` | Contact | Copyable contact blocks, validated five-field form with department routing, map panel, live open/closed hours. |

---

## Navigation

Every page carries the same nav and the same footer.

**Nav:** About · Our Work · Research · Contact, with Get Involved as the solid CTA. The current page is marked with `aria-current="page"`.

**Footer columns:** About / Our Work / Take part / Legal — 13 links covering every page and its main anchors.

Home links out to all six other pages twice: once in the "Six places to go from here" grid, and again through the initiative cards, hero CTAs, and footer.

---

## Link status

184 internal links resolve. Zero broken files, zero broken anchors.

34 links remain as `href="#"`. All of them point at things that do not exist yet:

| Count | What | Blocked by |
|---|---|---|
| 10 | News article links (9 cards + featured) | No published content |
| 6 | Programme detail pages (research ×3, Academy ×3) | Pages not built |
| 4 | Leadership profile links | No named people in the source |
| 14 | Privacy policy and terms, one pair per page | Legal pages not written |

`network.html` is the working template for the six missing programme pages. Copy it, swap the content, keep the structure.

---

## Before launch

**Blocking.**

1. Contact details — email, phone, street address. Eleven amber markers on `contact.html` mark each one.
2. Replace the approximate Bangladesh outline in `index.html` with an authoritative one. Search the file for `APPROXIMATE OUTLINE`. National borders should not be eyeballed.
3. Leadership: three people minimum with name, role, one-line bio, headshot. Delete any card left unfilled.
4. Confirm the legal entity for the copyright line — Hikaru Foundation or Onchain Software and Research Limited.
5. Point the contact and subscribe forms at a real handler. Neither has a backend.
6. Privacy policy and terms.

**Delete before launch.**

- The sample/launch toggle at bottom-left of `news.html`, plus its `.switch` CSS block.
- The green build-note callouts on `about.html`, `work.html`, and `contact.html`.

**Decisions still open.**

- `news.html` ships with both Load More and numbered pagination. Pick one. Load More suits a low posting rate; numbered pages will look abandoned with nine posts.
- The onboarding roadmap on `work.html` describes an intended process, not a documented one. Confirm who replies and how fast, or cut the reply-time claim.
- Set up a dedicated security disclosure address. For a blockchain project, researchers finding a protocol flaw need somewhere better than a general form.

---

## Design system

NVIDIA tokens, applied consistently across all seven pages.

- **Accent:** `#76b900`, lifting to `#8fd414`. One accent only.
- **Surfaces:** `#010203` deep, `#04070a` on bloom slabs.
- **Type:** Inter 400/500/700. NVIDIA-EMEA is proprietary; Inter is the documented closest match, Arial the official fallback.
- **Motif:** the 12px green corner square, carried on every card and panel.
- **Bloom:** a blurred radial gradient rising from the bottom of a `.stage` block, on an 11-second breathe cycle, feathered into the section below.

Every animation respects `prefers-reduced-motion`. The orb stops rotating, the bloom stops breathing, the timeline lights all at once, and accordions open without transition.
