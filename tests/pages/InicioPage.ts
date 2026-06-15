import { Page } from '@playwright/test';
import { MenuComponent } from '../components/MenuComponent';

export class InicioPage {
  readonly menu: MenuComponent;

  constructor(private readonly page: Page) {
    this.menu = new MenuComponent(page);
  }

  async goto() {
    await this.page.goto('/index.html');
  }

  nombreEmpresa() {
    return this.page.locator('.marca').getByText('Delicias Express');
  }

  tituloHero() {
    return this.page.getByRole('heading', { name: /comer bien no debería ser complicado/i });
  }

  descripcion() {
    return this.page.locator('.hero-texto');
  }

  botonVerProductos() {
    return this.page.getByRole('link', { name: /ver productos/i });
  }

  async irAProductos() {
    await this.botonVerProductos().click();
  }
}