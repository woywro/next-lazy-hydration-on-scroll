# next-lazy-hydration-on-scroll

Hydrate Next.js components when they scroll into view instead of all at once on load.

The HTML is still server-rendered, so the page looks and indexes the same. Only the JavaScript is deferred — which cuts hydration work off the critical path and lowers TBT.

> **Pages Router only.** On the App Router, use Server Components and [streaming](https://nextjs.org/docs/app/guides/streaming) instead. Requires React 18+.

## Still relevant in 2026

Plenty of production apps are still on the Pages Router. It ships in Next.js 16, is not deprecated, and has [its own actively maintained docs](https://nextjs.org/docs/pages/getting-started).

Migration is also [incremental by design](https://nextjs.org/docs/app/guides/migrating/app-router-migration) — `app/` and `pages/` run side by side, page by page — so codebases sit half-migrated for a long time, and the `pages/` half never gets Server Components. Those routes hydrate the whole tree on every load. That's what this fixes, without a rewrite.

## Install

```bash
npm install next-lazy-hydration-on-scroll
```

## Usage

```tsx
import { lazyHydrate } from 'next-lazy-hydration-on-scroll'

const HeavyComponent = lazyHydrate(() => import('./components/HeavyComponent'))

export default function Page() {
  return (
    <div>
      <header>Hydrated immediately</header>
      <HeavyComponent /> {/* hydrates on scroll */}
    </div>
  )
}
```

With options:

```tsx
const HeavyComponent = lazyHydrate(() => import('./components/HeavyComponent'), {
  rootMargin: '0px 400px',
  wrapperElement: 'div',
  LoadingComponent: () => <div>Loading…</div>,
})
```

## Options

| Option             | Type                                | Default       | Description                                            |
| ------------------ | ----------------------------------- | ------------- | ------------------------------------------------------ |
| `rootMargin`       | `string`                            | `'0px 250px'` | How early to hydrate, relative to the viewport         |
| `wrapperElement`   | `keyof React.JSX.IntrinsicElements` | `'section'`   | Tag used for the wrapper element                       |
| `LoadingComponent` | `ComponentType`                     | `undefined`   | Shown while the chunk loads                            |

Props are forwarded to your component, except `wrapperProps`, which is spread onto the wrapper:

```tsx
<HeavyComponent title="forwarded" wrapperProps={{ className: 'wrapper' }} />
```

## Why not `next/dynamic`

`next/dynamic` splits the chunk, but the component is still part of the tree, so its JavaScript is needed to hydrate the page. Using `ssr: false` avoids that but drops the server-rendered HTML.

`lazyHydrate` keeps the HTML *and* keeps the chunk off the initial path.

## Gotchas

- **Give the component its own file.** Barrel files (`index.ts` re-exports) pull siblings into the same chunk and defeat the split.
- **The wrapper is a real element.** Parent flex/grid rules see it, not your component. Adjust with `wrapperElement` / `wrapperProps`, or `display: contents`.
- **Nothing runs before hydration.** No effects, no event handlers — so no analytics impressions inside a lazy component.
- **Skip it above the fold.** Visible components hydrate right away anyway.

## How it works

The wrapper renders empty on the client with `dangerouslySetInnerHTML` and `suppressHydrationWarning`, so React leaves the server HTML alone and never descends into the subtree. An `IntersectionObserver` then loads and hydrates the component as it nears the viewport. Without `IntersectionObserver`, it hydrates immediately.

## Further reading

- [New Suspense SSR Architecture in React 18](https://github.com/reactwg/react-18/discussions/37) — why hydration is one blocking pass
- [Rendering on the Web](https://web.dev/articles/rendering-on-the-web) — hydration's cost to TBT and INP
- [Islands Architecture](https://jasonformat.com/islands-architecture/) — the broader pattern

## License

MIT
