export class BusquedaProductoBuilder {
  private textoBusqueda = '';
  private resultados: string[] = [];

  static nueva() {
    return new BusquedaProductoBuilder();
  }

  conTexto(texto: string) {
    this.textoBusqueda = texto;
    return this;
  }

  conResultados(resultados: string[]) {
    this.resultados = resultados;
    return this;
  }

  build() {
    return {
      textoBusqueda: this.textoBusqueda,
      resultadosEsperados: this.resultados
    };
  }
}