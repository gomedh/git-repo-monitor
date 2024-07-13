# GIT-REPO-MONITOR

## Overview

This is a React application which allows users to explore GitHub repositories where the programming language is TypeScript. Users can select repositories from a dropdown menu to view the associated top 5 programming languages and visualizations using a pie chart.

## Features

- **Repository Selection:** Users can select from a list of 10 GitHub repositories where Typescript is a main programming language.
- **Dynamic Content:** Displays top 5 programming languages used in the selected repository with a pie chart.
- **Responsive Design:** Built with Material UI for a clean and responsive user interface.
- **Modal Interface:** Interactive modal for repository selection and language visualization.

## Technologies Used

- **React:** For building the user interface.
- **Material UI:** For styling and UI components.
- **Axios:** For making API calls to GitHub's REST API.
- **Recharts:** For rendering dynamic charts.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gomedh/git-repo-monitor.git
   cd git-repo-monitor

2. **Install Dependencies**
   ```bash
   npm install

3. **Start the Development Server**
   ```bash
   npm start

- The application will be available at http://localhost:3000 (or another port specified by your configuration).

4. **Usage**
- Open your web browser and navigate to http://localhost:3000.
- Click on the Open Pie Chart Button
- Use the dropdown menu to select one of the available TypeScript repositories.
- View the top 5 programming languages used in the selected repository, displayed through a pie chart.
- Click on the View Details link to see the percentage usage of the programming languages.

## Acknowledgements

1. GitHub API: For providing repository data.
2. Material UI: For the styling and user interface components.
3. Recharts: For the charting library used to visualize programming languages.



