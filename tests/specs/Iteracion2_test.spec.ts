import { test, expect } from '@playwright/test';
import { MenuComponent } from '../components/MenuComponent';
const paginas = [
  { url: '/index.html', activa: 'Inicio' },
  { url: '/productos.html', activa: 'Productos' },
  { url: '/consejos.html', activa: 'Consejos' }
];

test.describe('Menú común como componente', () => {
  for (const pagina of paginas) {
    test(`menú correcto en ${pagina.url}`, async ({ page }) => {
      const menu = new MenuComponent(page);

      await page.goto(pagina.url);

      await expect(menu.inicio()).toBeVisible();
      await expect(menu.productos()).toBeVisible();
      await expect(menu.consejos()).toBeVisible();

      await expect(menu[pagina.activa.toLowerCase() as 'inicio' | 'productos' | 'consejos']())
        .toHaveAttribute('aria-current', 'page');
    });
  }
});