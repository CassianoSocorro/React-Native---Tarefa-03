import { useState } from 'react';
import { Pizza, PizzaService } from '../models/PizzaModel';

let bancoDeDadosPizzas: Pizza[] = []

export const PizzaController = () => {
  const [itens, setItens] = useState<Pizza[]>(() => bancoDeDadosPizzas);
  const [texto, setTexto] = useState('');

    const sincronizar = () => {
    setItens([...bancoDeDadosPizzas]);
  };

  const addItem = () => {
    const erro = PizzaService.validarSabor(texto, itens);

    if (erro) {
      alert(erro);
      return;
    }

    const novoItem: Pizza = {
      id: itens.length + 1,
      nome: texto,
    };

    bancoDeDadosPizzas = [...bancoDeDadosPizzas, novoItem];
    setItens(bancoDeDadosPizzas);
    setTexto('');
  }
  const removeItem = (id: number) => {
    bancoDeDadosPizzas = bancoDeDadosPizzas.filter(item => item.id !== id)
    setItens(bancoDeDadosPizzas);
  };
  
  return { itens, texto, setTexto, addItem, removeItem, sincronizar  };
};
