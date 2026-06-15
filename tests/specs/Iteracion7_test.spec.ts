import { test, expect } from '../fixtures/app.fixture';

test('E2E: Inicio → Productos → Buscar saludable', async ({ inicio, productos, page }) => {
  await inicio.goto();
  await inicio.irAProductos();
  await expect(page).toHaveURL(/productos\.html/);

  await productos.buscarInput().fill('saludable');
  await expect(productos.cards().first()).toBeVisible();

  const textos = await productos.cards().allTextContents();
  expect(textos.join(' ').toLowerCase()).toContain('saludable');
});


test('E2E: Inicio → Consejos → Productos → Buscar pasta', async ({ inicio, productos, consejos, page }) => {
  await inicio.goto();
  await inicio.menu.irAConsejos();
  await expect(page).toHaveURL(/consejos\.html/);

  await consejos.irAProductos();
  await expect(page).toHaveURL(/productos\.html/);

  await productos.buscarInput().fill('pasta');
  await expect(productos.cards().first()).toBeVisible();

  const textos = await productos.cards().allTextContents();
  expect(textos.join(' ').toLowerCase()).toContain('pasta');
});

test('E2E: Productos → Buscar hamburguesa lunar → Sin resultados', async ({ productos }) => {
  await productos.goto();

  await productos.buscarInput().fill('hamburguesa lunar');
  await expect(productos.sinResultados()).toBeVisible();
  await expect(productos.cards()).toHaveCount(0);
});