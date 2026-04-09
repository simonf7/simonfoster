import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Audits', () => {
    test('Check Main Page for WCAG compliance', async ({ page }) => {
        await page.goto('/');

        // Wait for animations to settle
        await page.waitForTimeout(1000);

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Check Landmarks and Semantic Roles', async ({ page }) => {
        await page.goto('/');

        const main = page.locator('main#content');
        await expect(main).toBeVisible();

        const header = page.locator('header.hero');
        await expect(header).toBeVisible();

        const footer = page.locator('footer');
        await expect(footer).toBeVisible();
    });
});
