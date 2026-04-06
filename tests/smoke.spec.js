import { test, expect } from '@playwright/test';

test.describe('Portfolio Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Check Page Title', async ({ page }) => {
    await expect(page).toHaveTitle(/Simon Foster/);
  });

  test('Check Hero Section Content', async ({ page }) => {
    const heroTitle = page.locator('h1');
    await expect(heroTitle).toContainText('Simon Foster');
    
    const heroDescription = page.locator('.hero p').first();
    await expect(heroDescription).toContainText('Technical Leader');
  });

  test('Check Main Sections Existence', async ({ page }) => {
    const sections = ['#about', '#focus', '#experience', '#education', '#interests'];
    for (const section of sections) {
      const el = page.locator(section);
      await expect(el).toBeVisible();
    }
  });

  test('Verify External Social Links', async ({ page }) => {
    const linkedIn = page.locator('a[aria-label="LinkedIn"]');
    await expect(linkedIn).toHaveAttribute('href', /linkedin.com/);
    await expect(linkedIn).toHaveAttribute('rel', 'noopener noreferrer');

    const github = page.locator('a[aria-label="GitHub"]');
    await expect(github).toHaveAttribute('href', /github.com/);
    await expect(github).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Navigation scrolls to sections', async ({ page }) => {
    const experienceLink = page.locator('nav a[href="#experience"]');
    await experienceLink.click();
    
    // Check if the experience section is in view or the URL has hash
    await expect(page).toHaveURL(/#experience/);
  });
});
