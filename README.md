![Alt Text](https://github.com/woywro/next-lazy-hydration-on-scroll/raw/main/gif.gif?raw=true 'example')

## Description

**next-lazy-hydration-on-scroll** is a lightweight library designed to optimize performance and improve user experience by lazy loading and hydrating components as the user scrolls through a webpage. This approach minimizes initial load time and reduces resource consumption, making it ideal for complex applications with numerous components.

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

## Explaination and Demo

https://next-lazy-hydration-on-scroll.vercel.app/

- **Component1** - Traditional Import: Included in the initial bundle, it loads and hydrates immediately with the page.

- **Component2** - Next.js Dynamic Import: Loaded in a separate chunk using Next.js's next/dynamic. It hydrates after loading.

- **Component3** - Code Splitting + Progressive Hydration: It is imported and then hydrated shortly after the component starts entering the screen.

⚠️ It uses **next/dynamic** under the hood. Dynamic imports and code splitting in Next.js work on a file basis. Ensure individual components you intend to load separately are in distinct files. Otherwise, dynamic import won't work.
