export interface Pizza {
  id: number;
  nome: string;
}

export const PizzaService = {
  validarSabor: (texto: string, lista: Pizza[]) => {
    if (texto.length <= 2) {
      return "O nome deve ter mais de 2 caracteres.";
    }

    for (let i = 0; i < lista.length; i++) {
      if (lista[i].nome === texto) {
        return "Este item já existe na lista.";
      }
    }
    return null; 
  }
};