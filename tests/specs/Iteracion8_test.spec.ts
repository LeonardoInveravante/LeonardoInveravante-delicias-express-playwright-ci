import { test, expect } from '../fixtures/app.fixture';

const viewports = [
  { name: 'mobile', device: { viewport: { width: 375, height: 667 } } },
  { name: 'tablet', device: { viewport: { width: 768, height: 1024 } } },
  { name: 'desktop', device: { viewport: { width: 1280, height: 720 } } }
];

for (const vp of viewports) {
  test.describe(`Productos responsive - ${vp.name}`, () => {
    test.use(vp.device);

    test('comprobación página productos', async ({ productos }) => {
      await productos.goto();

      await expect(productos.titulo()).toBeVisible();
      await expect(productos.cards().first()).toBeVisible();
      // await page.waitForTimeout(1500);
    });
  });
}