import { ProductosPage } from '../pages/ProductosPage';

export class ProductosPageConMedicion {
  constructor(private readonly productos: ProductosPage) {}

  async goto() {
    const inicio = performance.now();
    await this.productos.goto();
    const fin = performance.now();
    console.log(`Productos cargada en ${(fin - inicio).toFixed(2)} ms`);
  }

}