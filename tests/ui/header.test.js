const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('https://mdzhut200-retake-exam.onrender.com/');  // you can replace this URL with any page that includes the header
    const homeLink = await page.$('h1');
    const text = await homeLink.textContent();
    expect(text).toBe('Boardgames Collection');
  });
  