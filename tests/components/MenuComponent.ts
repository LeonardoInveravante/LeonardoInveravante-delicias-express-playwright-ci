import { Page, expect } from '@playwright/test';

export class MenuComponent {
  constructor(private readonly page: Page) {}

  private nav() {
    return this.page.getByRole('navigation');
  }

  inicio() {
    return this.page.getByRole('link', {name: 'Inicio', exact: true});
  }

  productos() {
    return this.nav().getByRole('link', {name: 'Productos', exact: true});
  }

  consejos() {
    return this.nav().getByRole('link', {name: 'Consejos', exact: true});
  }

  async comprobarVisible() {
    await expect(this.inicio()).toBeVisible();
    await expect(this.productos()).toBeVisible();
    await expect(this.consejos()).toBeVisible();
  }

  async irAInicio() {
    await this.inicio().click();
  }

  async irAProductos() {
    await this.productos().click();
  }

  async irAConsejos() {
    await this.consejos().click();
  }
}