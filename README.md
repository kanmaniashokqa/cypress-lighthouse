# Cypress Lighthouse Test Project

This project demonstrates how to run Lighthouse audits using Cypress, providing automated performance, accessibility, best practices, and SEO testing for web applications.

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- Google Chrome browser

## Installation

1. Clone this repository:
  git clone https://github.com/kanmaniashokqa/cypress-lighthouse.git

2. Navigate to the project directory:
   cd check24-audit
   
3. Install dependencies:
  npm install --save-dev cypress @cypress-audit/lighthouse cypress-mochawesome-reporter

4. To run the Lighthouse tests:

   npx cypress open

## Reports

You will have a .json report file created after test completion under cypress/reports folder.
Upoad the json file to the Lighthouse Report Viewer to view the report as html








