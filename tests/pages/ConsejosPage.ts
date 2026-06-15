import { Page } from '@playwright/test';
import { MenuComponent } from '../components/MenuComponent';

export class ConsejosPage {
  readonly menu: MenuComponent;

  constructor(private readonly page: Page) {
    this.menu = new MenuComponent(page);
  }

  async goto() {
    await this.page.goto('/consejos.html');
  }

  titulo() {
    return this.page.getByRole('heading', {name: /consejos/i});
  }

  async irAProductos() {
    await this.menu.irAProductos();
  }
}