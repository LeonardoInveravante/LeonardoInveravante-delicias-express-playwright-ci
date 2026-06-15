import { Page } from "@playwright/test";

export class SearchBoxComponent {
  constructor(private page: Page) {}

  caja() {
    return this.page.getByRole('textbox', { name: /buscar productos/i });
  }

  async escribir(texto: string) {
    await this.caja().fill(texto);
  }

  async limpiar() {
    await this.caja().fill('');
  }
}

