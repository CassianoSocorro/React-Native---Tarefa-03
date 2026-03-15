import { useState } from 'react';
import { Pizza, PizzaService } from '../models/PizzaModel';

export const PizzaController = () => {
  const [itens, setItens] = useState<Pizza[]>([]);
  const [texto, setTexto] = useState('');

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

    setItens([...itens, novoItem]);
    setTexto(''); 
  };

  const removeItem = (id: number) => {
    setItens(itens.filter(item => item.id !== id));
  };
  
  return { itens, texto, setTexto, addItem, removeItem };
};