## Description
**next-lazy-hydration-on-scroll** is a lightweight library designed to optimize performance and improve user experience by lazy loading and hydrating components as the user scrolls through a webpage. This approach minimizes initial load time and reduces resource consumption, making it ideal for complex applications with numerous components.

## Features
- **Lazy Loading:** Dynamically load components only when they are about to enter the viewport.
- **Progressive Hydration:** Hydrate components on-demand, reducing the initial rendering workload.
- **Scroll-Based Activation:** Hydrate and render components based on scroll position.

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
