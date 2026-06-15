import { Locator } from "@playwright/test";

export class ProductoCardComponent {
  constructor(private card: Locator) {}

  nombre() {
    return this.card.locator('.producto-nombre');
  }

  precio() {
    return this.card.locator('.producto-precio');
  }

  categoria() {
    return this.card.locator('.producto-categoria');
  }

  etiqueta() {
    return this.card.locator('.producto-etiqueta');
  }
}
