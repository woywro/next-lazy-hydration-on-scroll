![Banner image](https://github.com/woywro/next-lazy-hydration-on-scroll/raw/main/banner.png?raw=true 'banner')
___
## Description
**next-lazy-hydration-on-scroll** is a lightweight library designed to optimize performance and improve user experience by lazy loading and hydrating components as the user scrolls through a webpage. This approach minimizes initial load time and reduces resource consumption, making it ideal for complex applications with numerous components.

![Example use](https://github.com/woywro/next-lazy-hydration-on-scroll/raw/main/gif.gif?raw=true 'example')

## Features

- **Lazy Loading:** Dynamically load components only when they are about to enter the viewport.
- **Progressive Hydration:** Hydrate components on-demand, reducing the initial rendering workload.
- **Scroll-Based Activation:** Hydrate and render components based on scroll position.

## Installation

To install the package, use one of the following commands:

```
npm install next-lazy-hydration-on-scroll

pnpm install next-lazy-hydration-on-scroll

yarn add next-lazy-hydration-on-scroll
```

## Usage

```
import { lazyHydrate } from "next-lazy-hydration-on-scroll";

const Component = lazyHydrate(
  () => import("../components/Component"),
  {
    LoadingComponent: () => <div>Loading...</div>,
  }
);
```
## How `next-lazy-hydration-on-scroll` Works?
It delays the hydration of pre-rendered HTML & splits js into smaller chunks that are loaded on scroll.

- **Server-Side Rendering**: Initially, pages are rendered server-side with static components.
- **Dynamic Imports**: Components are set up for dynamic import, reducing initial load size.
- **Client-Side Placeholders**: Non-interactive placeholders are rendered client-side initially.
- **Scroll Detection**: Uses `IntersectionObserver` to detect when components enter the viewport.
- **Conditional Hydration**: Visible placeholders are replaced with interactive components on-the-fly.

## Explanation and Demo

https://next-lazy-hydration-on-scroll.vercel.app/

⚠️ It uses **next/dynamic** under the hood. Dynamic imports and code splitting in Next.js work on a file basis. Ensure individual components you intend to load separately are in distinct files. Otherwise, dynamic import won't work.
