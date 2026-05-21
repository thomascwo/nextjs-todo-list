[日本語版](./README.ja.md)

# TODO List built with Next.js 

A modern TODO List web application built with Next.js. This project demonstrates modern web development practices with TypeScript, React and Tailwind CSS.

## Overview

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- Node.js 18+ 
- [Bun](https://bun.sh) (recommended) or npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thomascwo/nextjs-todo-list.git
cd nextjs-todo-list
```

2. Install dependencies:
```bash
# Recommended
bun install

# or
npm install
yarn install
pnpm install
```

### Development Server

Start the development server:

```bash
# Recommended
bun dev

# or
npm run dev
yarn dev
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features Demonstrated

- 📱 **Responsive Design** - Seamless experience across all devices
- 📝 **Task Management** - Create, edit, and delete tasks efficiently
- 💾 **State Management** - Persistent state storage handling
- 🌍 **Internationalization** - Instant language switching without page reload
- 🎨 **Modern UI** - Clean and responsive UI by Tailwind CSS
- ⚡ **Smooth Animations** - Fluid transitions and interactive motions

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 16 with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [HeroUI](https://heroui.com)
- **Animations:** [Motion](https://motion.dev)
- **Internationalization:** [i18next](https://www.i18next.com) & [react-i18next](https://react.i18next.com)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Icons:** [@gravity-ui/icons](https://gravity-ui.com)
- **Utilities:** clsx, nanoid, react-device-detect

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
├── components/           # UI components
├── store/                # Zustand store
└── types/                # Type definitions
├── i18n/                 # i18n setup
│   └── locales/
│   │   ├── en.json       # English translations
│   │   └── jp.json       # Japanese translations
└── lib/                  # Utils and data
```

## Author

Created by [Thomas Cheung](https://github.com/thomascwo)

## License

This project is private and not licensed for public use.
