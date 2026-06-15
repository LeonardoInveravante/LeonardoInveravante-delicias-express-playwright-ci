import { Page } from '@playwright/test';
import { MenuComponent } from '../components/MenuComponent';
import { CardComponent } from '../components/CardComponent';

export class ProductosPage {
  readonly menu: MenuComponent;

  constructor(private readonly page: Page) {
    this.menu = new MenuComponent(page);
  }

  async goto() {
    await this.page.goto('/productos.html');
  }

  titulo() {
    return this.page.getByRole('heading', { name: /nuestros platos preparados/i });
  }

  cards() {
    return this.page.locator('.producto-card');
  }

  card(index: number) {
    return new CardComponent(this.cards().nth(index));
  }

  contador() {
    return this.page.locator('#contador-productos');
  }

  buscarInput() {
    return this.page.locator('#busqueda-productos');
  }

  botonLimpiar() {
    return this.page.locator('#limpiar-busqueda');
  }

  sinResultados() {
    return this.page.locator('#sin-resultados');
  }

}