# Playwright Memex Integration

This project integrates Playwright with Memex to capture console logs from web pages for quick debugging.

## Progress

- [x] Project Setup
- [x] Environment Check
- [x] Create Playwright Script
- [x] Demonstrate Usage
- [ ] Documentation

## Usage

To capture console logs from a web page, run the `capture-logs.js` script with the target URL as an argument:

```bash
node scripts/capture-logs.js <URL>
```

For example:

```bash
node scripts/capture-logs.js https://www.example.com
```

The script will output a JSON array of console messages captured from the page.

