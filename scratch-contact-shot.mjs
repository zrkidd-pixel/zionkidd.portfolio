import { chromium } from 'playwright';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:4179/zionkidd.portfolio/#/', { waitUntil: 'networkidle' });
await page.locator('#contact').scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/contact-section.png' });
await browser.close();
