import { test, expect } from '@playwright/test';
import { ProductosPage } from '../pages/ProductosPage';

test('Filtrar productos por nombre', async ({ page }) => {
  const productos = new ProductosPage(page);

  await productos.goto();

  await productos.buscarInput().fill('pollo');

  await expect(productos.cards().first()).toBeVisible();

  const textos = await productos.cards().allTextContents();
  expect(textos.join(' ').toLowerCase()).toContain('pollo');
});

test('Filtrar por categoría', async ({ page }) => {
  const productos = new ProductosPage(page);

  await productos.goto();

  await productos.buscarInput().fill('pasta');

  const cards = productos.cards();

  await expect(cards.first()).toBeVisible();

  const textos = await cards.allTextContents();
  expect(textos.join(' ').toLowerCase()).toContain('pasta');
});

test('Filtrar por etiqueta', async ({ page }) => {
  const productos = new ProductosPage(page);

  await productos.goto();

  await productos.buscarInput().fill('saludable');

  await expect(productos.cards().first()).toBeVisible();
});

test('Sin resultados muestra mensaje', async ({ page }) => {
  const productos = new ProductosPage(page);

  await productos.goto();

  await productos.buscarInput().fill('sin tarjeta');

  await expect(productos.sinResultados()).toBeVisible();
});

test('Limpiar búsqueda', async ({ page }) => {
  const productos = new ProductosPage(page);

  await productos.goto();

  await productos.buscarInput().fill('pollo');

  // await page.waitForTimeout(3000);

  await productos.botonLimpiar().click();

  await expect(productos.cards().first()).toBeVisible();
});