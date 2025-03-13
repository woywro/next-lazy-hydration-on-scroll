# next-lazy-hydration-on-scroll

⚠️ **Pages Directory Only** - For Next.js App Directory better use [built-in streaming](https://nextjs.org/learn/dashboard-app/streaming).

Optimize Next.js app performance by lazy loading and hydrating components when they enter the viewport.

- ⚡️ Lower Total Blocking Time (TBT)
- 📦 Smaller Bundle Size
- 🚀 Improved Performance

## Installation

```bash
npm install next-lazy-hydration-on-scroll
# or
yarn add next-lazy-hydration-on-scroll
# or
pnpm add next-lazy-hydration-on-scroll
```

## Usage

```tsx
import { lazyHydrate } from 'next-lazy-hydration-on-scroll'

const LazyComponent = lazyHydrate(() => import('./components/HeavyComponent'), {
  LoadingComponent: () => <div>Loading...</div>, // Optional
  wrapperElement: 'div', // Optional, defaults to 'section'
})

export default function Page() {
  return (
    <div>
      <header>Always hydrated</header>
      <LazyComponent wrapperProps={{ className: 'my-wrapper', id: 'lazy-component' }} /> {/* Hydrates when scrolled into view */}
    </div>
  )
}
```

## Options

| Option             | Type                          | Default       | Description                                             |
| ------------------ | ----------------------------- | ------------- | ------------------------------------------------------- |
| `rootMargin`       | `string`                      | `'0px 250px'` | Margin around the root element for IntersectionObserver |
| `LoadingComponent` | `ComponentType`               | `undefined`   | Component to show while loading                         |
| `wrapperElement`   | `keyof JSX.IntrinsicElements` | `'section'`   | HTML element to wrap the component                      |

## Component Props

| Prop           | Type                  | Description                          |
| -------------- | --------------------- | ------------------------------------ |
| `wrapperProps` | `Record<string, any>` | Props to pass to the wrapper element |

## How It Works

1. Server renders full HTML content
2. Components remain static until scrolled into view
3. When component enters viewport:
   - JavaScript is loaded
   - Component is hydrated
   - Interactivity is enabled

## Implementation Requirements

- Keep components in separate files
- Avoid barrel files (index.ts that re-exports components)
- Import components directly:

```tsx
// ✅ Correct
import { ComponentA } from './components/ComponentA'

// ❌ Avoid
// components/index.ts with re-exports
```

## Browser Support

Works in all modern browsers supporting IntersectionObserver (IE11+ with polyfill).

## Notes

- SEO friendly - content is pre-rendered
- Components are wrapped in customizable elements (default: `<section>`) for stable viewport detection
- Works with Next.js 12 and above

## FAQ

### Q: Does it affect SEO?

A: No - all content is pre-rendered and visible to search engines.

### Q: What's the browser support?

A: All modern browsers (IE11+ with polyfill).

### Q: Why are components wrapped in an element?

A: For two reasons: to provide a stable element for IntersectionObserver tracking, and to handle hydration mismatches with `suppressHydrationWarning`.

### Q: Can I customize the wrapper element?

A: Yes - use the `wrapperElement` option to specify any valid HTML element (e.g., 'div', 'article') and pass props to it using the `wrapperProps` prop.

### Q: Why is dangerouslySetInnerHTML used?

A: It prevents React from hydrating down the component tree, allowing to preserve server-rendered content while controlling when hydration occurs.

[View Demo](https://next-lazy-hydration-on-scroll.wrotek.dev/) | [GitHub Repository](https://github.com/woywro/next-lazy-hydration-on-scroll)
