import { Page } from '@playwright/test';
import { InicioPage } from '../pages/InicioPage';
import { ProductosPage } from '../pages/ProductosPage';
import { ConsejosPage } from '../pages/ConsejosPage';

export class PageFactory {
  static crear(nombre: 'inicio' | 'productos' | 'consejos', page: Page) {
    switch (nombre) {
      case 'inicio':
        return new InicioPage(page);

      case 'productos':
        return new ProductosPage(page);

      case 'consejos':
        return new ConsejosPage(page);

      default:
        throw new Error(`Página no soportada: ${nombre}`);
    }
  }
}