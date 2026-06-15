import { test, expect } from '@playwright/test';
import { ProductosPage } from '../pages/ProductosPage';

test('Página de productos y cards', async ({ page }) => {
  const productos = new ProductosPage(page);

  await productos.goto();

  const cards = productos.cards();
  const count = await cards.count();
  await expect(cards).toHaveCount(count);

  for (let i = 0; i < await cards.count(); i++) {
    await productos.card(i).validarEstructura();
  }

  await expect(productos.contador()).toHaveText('Mostrando ' + count + ' productos');
});