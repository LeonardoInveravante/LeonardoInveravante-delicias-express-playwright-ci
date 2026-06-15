import { test, expect } from '../fixtures/app.fixture';
import { BusquedaProductoBuilder } from '../builders/BusquedaProductoBuilder';
import { PageFactory } from '../factories/PageFactory';
import { ProductosPageConLogs } from '../decorators/ProductosPageConLogs';
import { ProductosPageConMedicion } from '../decorators/ProductosPageConMedicion';

test('Builder - Filtrar productos por nombre y comprobar resultados', async ({ productos }) => {
  const caso = BusquedaProductoBuilder
    .nueva()
    .conTexto('pollo')
    .conResultados(['pollo al curry'])
    .build();

  await productos.goto();
  await productos.buscarInput().fill(caso.textoBusqueda);

  const textos = await productos.cards().allTextContents();
  const contenido = textos.join(' ').toLowerCase();

  for (const esperado of caso.resultadosEsperados) {
    expect(contenido).toContain(esperado);
  }
});

test('Factory Method - creación de páginas', async ({ page }) => {
  const inicio = PageFactory.crear('inicio', page);
  const productos = PageFactory.crear('productos', page);
  const consejos = PageFactory.crear('consejos', page);

  await inicio.goto();
  // await page.waitForTimeout(1500);

  await productos.goto();
  // await page.waitForTimeout(1500);

  await consejos.goto();
  // await page.waitForTimeout(1500);
});

test('Decorator - Productos logs', async ({ productos }) => {
  const productosConLogs = new ProductosPageConLogs(productos);
  await productosConLogs.goto();
  await expect(productosConLogs.cards().first()).toBeVisible();
});

test('Decorator - Productos medición', async ({ productos }) => {
  const productosConMedicion = new ProductosPageConMedicion(productos);
  await productosConMedicion.goto();
});