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

    ```text
    src/
    ├── app/            # Application routes and pages
    ├── components/     # Reusable UI and layout components
    ├── lib/            # API calls and utility functions
    ├── styles/         # Global styles and Tailwind configuration
