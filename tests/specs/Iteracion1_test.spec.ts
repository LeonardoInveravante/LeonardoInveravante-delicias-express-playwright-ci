import { test, expect } from '@playwright/test';
import { InicioPage } from '../pages/InicioPage';

test('Arranque local-first', async ({ page }) => {
  const inicio = new InicioPage(page);

  await inicio.goto();

  await expect(inicio.nombreEmpresa()).toBeVisible();

  await expect(inicio.tituloHero()).toBeVisible();
  await expect(inicio.descripcion()).toBeVisible();

  await expect(inicio.botonVerProductos()).toBeVisible();

  await inicio.irAProductos();
  await expect(page).toHaveURL(/productos\.html/);
});