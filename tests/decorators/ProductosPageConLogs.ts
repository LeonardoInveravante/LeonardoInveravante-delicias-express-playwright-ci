import { ProductosPage } from '../pages/ProductosPage';

export class ProductosPageConLogs {
  constructor(private readonly productos: ProductosPage) {}

  async goto() {
    console.log('Entrando en Productos');
    await this.productos.goto();
    console.log('Página productos cargada');
  }

  cards() {
    console.log('Obteniendo cards');
    return this.productos.cards();
  }
}