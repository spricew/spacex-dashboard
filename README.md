# 🚀 SpaceX Dashboard

A responsive web application for exploring SpaceX launches: latest mission, recent launches, next launch and full launch history, each with detailed mission pages.

Built as a frontend technical challenge, with emphasis on code organization, data fetching strategies, and reusable UI components.

## Features

- **Home dashboard** with latest launch highlight, recent launches and upcoming launches
- **Launch list** with pagination, sorting by date (ascending/descending)
- **Launch detail page** with mission information, rocket, launchpad and video
- Card-based UI built from reusable components
- Fully responsive layout for desktop and mobile

## Tech Stack

- **Next.js 16** (App Router) – Server components and server-side data fetching
- **React 19** – Component-based UI development
- **TypeScript** – Static typing for reliability and maintainability
- **Tailwind CSS v4** – Utility-first styling
- **lucide-react** – Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/spricew/spacex-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd spacex-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Create a production build         |
| `npm run start` | Run the production build          |
| `npm run lint`  | Run ESLint                        |

## Project Structure

The project follows a modular structure using the Next.js App Router:

```
├── app/                    # Application routes and pages
│   ├── page.tsx            # Home dashboard
│   ├── Launch/[id]/        # Launch detail page (dynamic route)
│   └── Launches/           # Launches list page + server actions
├── components/
│   ├── layout/             # Page-specific layout components
│   └── ui/                 # Reusable UI components (cards, badges, buttons...)
├── lib/
│   ├── api/                # Data fetching functions
│   ├── data/               # Local static launch data (JSON snapshot)
│   └── utils/              # Utility functions (date formatting, etc.)
```

## Data Source

> **Note:** The community-maintained SpaceX API (`api.spacexdata.com`) was archived in June 2026 and began returning global SSL errors.
>
> To guarantee 100% uptime and instantaneous load times, data fetching was migrated to a **local static JSON snapshot**:
>
> - **Launches**: A public dump of 132 detailed historical SpaceX launches (`lib/data/launches.json`).
> - **Rockets & Launchpads**: Static mapping of official API models.
>
> All UI features remain identical, but network failures from external dependencies are completely eliminated.

All data fetching is centralized in `lib/api/spacex.ts`, keeping components focused on presentation.

## Technical Decisions

- **Next.js App Router**: leverages server components and async data fetching, improving performance and reducing client-side complexity.
- **Server-side data fetching**: better initial load performance; components stay simple and presentation-focused.
- **Reusable UI components**: consistent codebase that is easier to maintain and extend.
- **TypeScript**: reduces runtime errors when working with external data structures.
- **Tailwind CSS**: rapid UI development with a consistent design system.

## Design Decisions

- A card-based layout makes launch information easy to scan and compare.
- The detail view focuses on essential mission data while avoiding information overload.
- Visual hierarchy and spacing guide attention to key information.
- Responsive behavior was considered from the start for usability across screen sizes.

## AI Usage

AI was used strictly as an auxiliary productivity tool. All core architectural decisions, component hierarchy, state management, and UX were driven and implemented by the developer. AI assisted in targeted areas:

- **TypeScript modeling**: refining interface definitions for external data structures.
- **Data transformation logic**: edge cases for payload formatting, date parsing and fallback values.
- **Syntax & debugging acceleration**: repetitive boilerplate and diagnosing CSS layout behaviors.

Every AI-assisted suggestion was reviewed, refactored, and manually integrated to ensure maintainability and adherence to modern Next.js/React best practices.
