import { test, expect } from '../fixtures/app.fixture';

const paginas = [
  { url: '/index.html', activa: 'Inicio' },
  { url: '/productos.html', activa: 'Productos' },
  { url: '/consejos.html', activa: 'Consejos' }
];

test.describe('Menú común como componente', () => {
  for (const pagina of paginas) {
    test(`menú correcto en ${pagina.url}`, async ({ page, menu }) => {
      await page.goto(pagina.url);

      await expect(menu.inicio()).toBeVisible();
      await expect(menu.productos()).toBeVisible();
      await expect(menu.consejos()).toBeVisible();

      await expect(menu[pagina.activa.toLowerCase() as 'inicio' | 'productos' | 'consejos']())
        .toHaveAttribute('aria-current', 'page');
    });
  }
});

test('Filtrar productos por nombre', async ({ productos }) => {
  await productos.goto();

  await productos.buscarInput().fill('pollo');

  await expect(productos.cards().first()).toBeVisible();

  const textos = await productos.cards().allTextContents();
  expect(textos.join(' ').toLowerCase()).toContain('pollo');
});

test('Filtrar por categoría', async ({ productos }) => {
  await productos.goto();

  await productos.buscarInput().fill('pasta');

  await expect(productos.cards().first()).toBeVisible();

  const textos = await productos.cards().allTextContents();
  expect(textos.join(' ').toLowerCase()).toContain('pasta');
});

test('Filtrar por etiqueta', async ({ productos }) => {
  await productos.goto();

  await productos.buscarInput().fill('saludable');

  await expect(productos.cards().first()).toBeVisible();
});

test('Sin resultados muestra mensaje', async ({ productos }) => {
  await productos.goto();

  await productos.buscarInput().fill('sin tarjeta');

  await expect(productos.sinResultados()).toBeVisible();
});

test('Limpiar búsqueda', async ({ productos }) => {
  await productos.goto();

  await productos.buscarInput().fill('pollo');
  
  // await page.waitForTimeout(3000);

  await productos.botonLimpiar().click();

  await expect(productos.cards().first()).toBeVisible();
});