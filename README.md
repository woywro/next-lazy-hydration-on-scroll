<div align="center">
  <a href="https://next-lazy-hydration-on-scroll.vercel.app/optimized">
    <img src="https://github.com/woywro/next-lazy-hydration-on-scroll/raw/main/logo.png?raw=true" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">next-lazy-hydration-on-scroll</h3>

  <p align="center">
   Hydrate components dynamically as the user scrolls
    <br />
    <a href="https://next-lazy-hydration-on-scroll.vercel.app">🚀 View Demo</a>
  </p>
</div>

## 🌟 Motivation

Next.js, being a React framework, follows React's hydration process. In Next.js each page is pre-rendered into HTML on the server. This HTML is then sent to the browser, where it is displayed to the user almost immediately, providing a fast initial load time.

Once the JavaScript associated with the page is downloaded and executed, React takes over in the browser, "rehydrates" the static content by attaching event listeners to the DOM, and makes it interactive. This means that any buttons will become clickable, forms submitable, and any client-side functionality defined in your React components will become active (for e.g. hooks like useEffect).

In short, hydration is key to combining the best of both worlds:

- the speed of a statically generated website
- the interactivity of a single-page application (SPA).

### What is the Problem with Hydration?

Hydration process takes time. The more components we have, the longer the hydration process will take. This means that the user might experience a delay before the page becomes fully interactive.

### What is the Solution?

To optimize this, it's important to minimize the number of components rendered initially and consider techniques like code splitting to load components only when they are needed.

**Note:** Even if you use **next/dynamic** to import every component on the page, they will still be executed on the initial page load unless they are conditionally rendered.

If you are using Next.js with app directory you can use **streaming** which allows for selective hydration. However, if your app uses **pages** directory (which does not support streaming), you can consider suspending hydration manually for e.g. by **hydrating components on scroll**.

![Example use](https://github.com/woywro/next-lazy-hydration-on-scroll/raw/main/gif1.gif?raw=true 'example')

## ⚙️ Installation

Install the package using one of the following commands:

```
npm install next-lazy-hydration-on-scroll

pnpm install next-lazy-hydration-on-scroll

yarn add next-lazy-hydration-on-scroll
```

## 🚀 Usage

```
import { lazyHydrate } from "next-lazy-hydration-on-scroll";

const Component = lazyHydrate(
  () => import("../components/Component"),
  {
    LoadingComponent: () => <div>Loading...</div>,
  }
);
```

## 🛠️ How next-lazy-hydration-on-scroll Works?

It delays the hydration of pre-rendered HTML and splits js into smaller chunks that are loaded on scroll.
Ó

- 🌐 Server-Side Rendering: Initially, pages are rendered server-side with static components.
- 📦 Dynamic Imports: Components are set up for dynamic import, reducing initial load size.
- 🌀 Client-Side Placeholders: Non-interactive placeholders are rendered client-side initially.
- 👀 Scroll Detection: Uses IntersectionObserver to detect when components enter the viewport.
- ⚡ Conditional Hydration: Visible placeholders are replaced with interactive components on-the-fly.

## 🚀 Performance Impact

Optimizing the hydration process significantly impacts Total Blocking Time (TBT) by reducing the amount of work on the main thread. This decrease in work load allows the main thread to remain more responsive, minimizing the time it spends blocked so the page becomes interactive faster.

1. [Optimized Version](https://next-lazy-hydration-on-scroll.vercel.app/optimized)
   (Component3 is lazy loaded and hydrated on scroll)
   ![Optimized performance](https://github.com/woywro/next-lazy-hydration-on-scroll/raw/main/optimized.png?raw=true 'optimized performance')

2. [Unoptimized Version](https://next-lazy-hydration-on-scroll.vercel.app/unoptimized)
   (Component3 is statically imported)
   ![Unoptimized performance](https://github.com/woywro/next-lazy-hydration-on-scroll/raw/main/unoptimized.png?raw=true 'unoptimized performance')

## ⚠️ Additional Info

This package uses **next/dynamic** under the hood. Code splitting in Next.js work on a file basis. Ensure individual components you intend to load separately are in distinct files. Otherwise, dynamic import won't work.
