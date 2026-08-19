# 🚀 SpaceX Dashboard 

## Overview

"SpaceX Dashboard" is a frontend web application that displays information about SpaceX launches using the official SpaceX public API.  
The project focuses on presenting launch data in a clean, structured, and user-friendly interface. 

This application was built as a frontend technical challenge, emphasizing code organization, data fetching strategies, and reusable UI components.

## Features

- Display a list of SpaceX launches with mission details
- View detailed information for each launch
- Sort launches by date in ascending and descending order 
- Separate views for latest launch, recent launches, next launch and all launches
- Reusable UI components for cards and layout
- Responsive layout for desktop and mobile devices

## Tech Stack

- **Next.js** – React framework used for server-side rendering and optimized data fetching.
- **React** – Component-based UI development for building reusable and scalable interfaces.
- **TypeScript** – Static typing to improve code reliability and maintainability.
- **Tailwind CSS** – Utility-first CSS framework for fast and consistent styling.
- **SpaceX Public API** – External API used to fetch launch data.


## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/spricew/spacex-dashboard.git

2. Navigate to the project directory:

    ```bash
    cd spacex-dashboard

3. Install dependencies:
    ```bash
    npm install

4. Run the development server:
    ```bash
    npm run dev

5. Open your browser and go to:    
    ```bash
    http://localhost:3000


## Project Structure

The project follows a modular and scalable folder structure using the Next.js App Router:

    src/
    ├── app/            # Application routes and pages
    ├── components/     # Reusable UI and layout components
    ├── lib/            # API calls and utility functions
    ├── styles/         # Global styles

## API Usage

This project consumes the official SpaceX public API to retrieve launch data.

- Launch data is fetched from the SpaceX API endpoints.
- The API is used to retrieve relevant details and information.
- Data fetching is handled in a centralized way through utility functions to keep components clean and focused on presentation.

### API Status & Local Data Migration (August 2026)

> **Note:** The official community-maintained SpaceX API (`api.spacexdata.com`) was archived in June 2026 and later began returning global `525 SSL Handshake Failed` errors due to a broken certificate configuration on the origin server. 
> 
> To guarantee 100% uptime and instantaneous load times, the dashboard's data-fetching logic has been migrated to use a robust **local static JSON snapshot**. 
> 
> - **Launches**: Sourced from a trusted public dump containing 132 detailed historical SpaceX launches.
> - **Rockets & Launchpads**: Implemented via static mapping of official API models since the active catalog of SpaceX rockets (Falcon 1, 9, Heavy, Starship) and primary launchpads is highly static.
>
> All UI features remain identical, but network failures related to external dependencies are now completely eliminated.

## Technical Decisions

- **Next.js App Router** was used to take advantage of server components and async data fetching, improving performance and reducing client-side complexity.
- **Server-side data fetching** was chosen to ensure up-to-date launch data and better initial load performance.
- **Reusable UI components** were implemented to keep the codebase consistent and easier to maintain.
- **TypeScript** was used to reduce runtime errors and improve code readability when working with external API data.
- **Tailwind CSS** was selected to enable rapid UI development with a consistent design system.

## Design Decisions

### The UI was designed with clarity and usability as the main priorities.
A card-based layout was chosen to make launch information easy to scan and compare.
The details view focuses on essential mission data while avoiding information overload.
Visual hierarchy and spacing were used to guide the user’s attention to key information.
Responsive behavior was considered from the start to ensure usability across different screen sizes.

## AI Usage

AI was leveraged strictly as an **auxiliary productivity tool and technical assistant**, rather than as the foundation for the application. All core architectural decisions, component hierarchy, state management strategies, and UX designs were driven and implemented by the developer.

AI assistance was utilized in targeted areas to streamline the development workflow:
- **TypeScript Modeling**: Refining complex interface definitions and typing strategies for external data structures.
- **Data Transformation Logic**: Brainstorming edge cases for payload formatting, date parsing, and fallback values.
- **Syntax & Debugging Acceleration**: Speeding up repetitive boilerplate and assisting in diagnosing specific CSS layout behaviors.

> **Human Review & Quality Assurance:** Every AI-assisted suggestion was critically reviewed, refactored, and manually integrated to ensure maintainability, performance, and adherence to modern Next.js and React best practices.