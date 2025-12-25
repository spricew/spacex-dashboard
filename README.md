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

## Technical Decisions

- **Next.js App Router** was used to take advantage of server components and async data fetching, improving performance and reducing client-side complexity.
- **Server-side data fetching** was chosen to ensure up-to-date launch data and better initial load performance.
- **Reusable UI components** were implemented to keep the codebase consistent and easier to maintain.
- **TypeScript** was used to reduce runtime errors and improve code readability when working with external API data.
- **Tailwind CSS** was selected to enable rapid UI development with a consistent design system.

## Design Decisions

###The UI was designed with clarity and usability as the main priorities.
A card-based layout was chosen to make launch information easy to scan and compare.
The details view focuses on essential mission data while avoiding information overload.
Visual hierarchy and spacing were used to guide the user’s attention to key information.
Responsive behavior was considered from the start to ensure usability across different screen sizes.

## AI Usage

### AI tools were used as a productivity aid during development.
ChatGPT was used to brainstorm component structure and improve TypeScript typing when consuming the SpaceX API.
AI assistance helped debug rendering issues and refine data transformation logic.
All AI-generated suggestions were reviewed, adapted, and integrated manually to ensure code quality and alignment with project goals.