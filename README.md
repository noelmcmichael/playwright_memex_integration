# Playwright Memex Integration

This project integrates Playwright with Memex to capture console logs from web pages for quick debugging.

## Progress

- [x] Project Setup
- [x] Environment Check
- [x] Create Playwright Script
- [x] Demonstrate Usage
- [ ] Documentation

## Automated Testing with Playwright

This project now includes a reusable Playwright module for automated testing of web applications. The module, located in the `playwright-template` directory, can be copied into any new web application project to provide a comprehensive testing solution.

### Features

- **Video Recording**: Captures a video of the entire page load and interaction.
- **Screenshots**: Takes a full-page screenshot of the page after it has loaded.
- **Console Logging**: Captures all console messages (logs, warnings, and errors).
- **Automated Runner**: A test runner script orchestrates the testing process and provides a summary report.

### How it Works

The testing module consists of three main components:

1.  **`analyze-page.js`**: A script that uses Playwright to analyze a single web page and generate the testing artifacts (video, screenshot, and console log).
2.  **`playwright.config.json`**: A configuration file that defines the target web application, the pages to be tested, and the output directory for the test results.
3.  **`run-tests.js`**: A test runner script that reads the configuration file, executes the `analyze-page.js` script for each page, and generates a summary report.

### Usage

To use the testing module in a new project, follow these steps:

1.  **Copy the Template**: Copy the contents of the `playwright-template` directory into the root of your new project.
2.  **Install Dependencies**: Run `npm install playwright` to install the necessary dependencies.
3.  **Configure the Tests**: Edit the `playwright.config.json` file to define the `baseUrl` of your web application and the `pages` you want to test.
4.  **Run the Tests**: Execute the `run-tests.js` script to start the testing process:

    ```bash
    node run-tests.js
    ```

5.  **Review the Results**: The test results will be saved in the `playwright-results` directory. The `summary.json` file provides a high-level overview of the test run, while the individual page directories contain the detailed artifacts (video, screenshot, and console log).

