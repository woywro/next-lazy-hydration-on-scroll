<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/woywro/next-lazy-hydration-on-scroll/raw/main/logo.png?raw=true" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">next-lazy-hydration-on-scroll</h3>

  <p align="center">
   A lightweight library designed to optimize performance and improve user experience by lazy loading and hydrating components as the user scrolls through a webpage.
    <br />
    <a href="https://next-lazy-hydration-on-scroll-git-main-woywros-projects.vercel.app/">🚀 View Demo</a>
  </p>
</div>

## 🌟 Motivation

Hydration can add complexity and overhead to web applications. Even with dynamic imports using next/dynamic, the entire application may be hydrated on the client side, leading to longer loading times and increased resource usage. For instance, a page with a list of items where each component includes interactive features will be fully hydrated upfront rather than progressively as the user scrolls.

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

- 🌐 Server-Side Rendering: Initially, pages are rendered server-side with static components.
- 📦 Dynamic Imports: Components are set up for dynamic import, reducing initial load size.
- 🌀 Client-Side Placeholders: Non-interactive placeholders are rendered client-side initially.
- 👀 Scroll Detection: Uses IntersectionObserver to detect when components enter the viewport.
- ⚡ Conditional Hydration: Visible placeholders are replaced with interactive components on-the-fly.

## ⚠️ Additional Info

This package uses **next/dynamic** under the hood. Code splitting in Next.js work on a file basis. Ensure individual components you intend to load separately are in distinct files. Otherwise, dynamic import won't work.
