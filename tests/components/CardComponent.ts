import { Locator, expect } from '@playwright/test';

export class CardComponent {
  constructor(private readonly root: Locator) {}

  nombre() {
    return this.root.locator('.producto-nombre');
  }

  precio() {
    return this.root.locator('.producto-precio');
  }

  categoria() {
    return this.root.locator('.producto-categoria');
  }

  descripcion() {
    return this.root.locator('.producto-descripcion');
  }

  async validarEstructura() {
    await expect(this.nombre()).toBeVisible();
    await expect(this.precio()).toBeVisible();
    await expect(this.categoria()).toBeVisible();
    await expect(this.descripcion()).toBeVisible();
    await expect(this.descripcion()).not.toHaveText('');
  }
}