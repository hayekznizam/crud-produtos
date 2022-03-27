import { useState } from 'react';
import './App.css';

const produtosDefault = [
  {
    id: 0,
    thumb: '',
    descricao: 'Produto 1',
    marca: 'marca 1',
    ativo: true,
  },
  {
    id: 1,
    thumb: '',
    descricao: 'Produto 2',
    marca: 'marca 1',
    ativo: true,
  },
  {
    id: 3,
    thumb: '',
    descricao: 'Produto 3',
    marca: 'marca 2',
    ativo: false,
  },
  {
    id: 4,
    thumb: '',
    descricao: 'Produto 4',
    marca: 'marca 3',
    ativo: false,
  }
]

function App() {
  const [produtos, setProdutos] = useState(produtosDefault)
  return (
    <div className="App">
      <header>
        <h1>
          Crud Básico de produtos
        </h1>
      </header>

      <section>
        <div className="flex justify-content-end">
          <button className="button">Adicionar novo produto</button>
        </div>
        <ul>
        { produtos.map(produto => (
          <li className={`l-produto ${produto.ativo ? 'ativo' : 'inativo'}`}>
            <div className="detalhes">
              <h2> {produto.descricao} </h2>
              <p> {produto.marca} </p>
            </div>
          </li>
        )) }
        </ul>
      </section>
    </div>
  );
}

export default App;
