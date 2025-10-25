import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
testDir: './tests',
timeout: 30000,
use: {
headless: true,
screenshot: 'only-on-failure',
video: 'retain-on-failure',
},
projects: [
{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
{ name: 'firefox', use: { ...devices['Desktop Firefox'] } },
{ name: 'webkit', use: { ...devices['Desktop Safari'] } },
],
});