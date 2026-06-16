const { test, expect } = require('@playwright/test');
const path = require('path');

test('visual check', async ({ page }) => {
  const filePath = 'file://' + path.resolve('index.html');
  await page.goto(filePath);
  await page.screenshot({ path: 'visual_check.png', fullPage: true });
});
