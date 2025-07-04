const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Collect all console messages
  const messages = [];
  page.on('console', msg => {
    messages.push({ type: msg.type(), text: msg.text() });
  });

  // Navigate to the specified URL
  const url = process.argv[2];
  if (!url) {
    console.error('Please provide a URL as an argument.');
    process.exit(1);
  }

  try {
    await page.goto(url);
    await page.waitForTimeout(1000); // wait for 1 second


    // Log the captured console messages
    console.log(JSON.stringify(messages, null, 2));
  } catch (error) {
    console.error(`Error navigating to ${url}:`, error);
  } finally {
    await browser.close();
  }
})();
