import { test as base } from '@playwright/test';
import { InicioPage } from '../pages/InicioPage';
import { ProductosPage } from '../pages/ProductosPage';
import { ConsejosPage } from '../pages/ConsejosPage';
import { MenuComponent } from '../components/MenuComponent';

type Fixtures = {
  inicio: InicioPage;
  productos: ProductosPage;
  consejos: ConsejosPage;
  menu: MenuComponent;
};

export const test = base.extend<Fixtures>({
  inicio: async ({ page }, use) => {
    await use(new InicioPage(page));
  },

  productos: async ({ page }, use) => {
    await use(new ProductosPage(page));
  },

  consejos: async ({ page }, use) => {
    await use(new ConsejosPage(page));
  },

  menu: async ({ page }, use) => {
    await use(new MenuComponent(page));
  }
});

export const expect = test.expect;