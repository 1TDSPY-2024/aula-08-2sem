import { Link } from "react-router-dom";
// import { listaProdutos } from "../../data/listaProdutos";
import {listaProdutos} from "../../data/listaProdutos";
import { TipoProduto } from "../../types";
import { useEffect, useState } from "react";
export default function Produtos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "PRODUTOS";

      const listaRoupasString = localStorage.getItem("lista") || '[]';
      const lista:TipoProduto[] = JSON.parse(listaRoupasString);

      const [roupas] = useState([lista])
      

      useEffect(() =>{
        listaProdutos.length;
      },[])
    return(
      <div>
        <h1>Loja de roupas</h1>

        <table>
          <thead>
            <th>Nome</th>
            <th>Preço</th>
            <th>Editar | Excluir</th>
          </thead>
          <tbody>
              {lista.map((roupas)=>(
                <tr key={roupas.id}>
                  <td>{roupas.nome}</td>
                  <td>{roupas.preco}</td>
                  <td><img src={roupas.foto} alt={roupas.nome}/></td>
                  <td><Link to={`/editar/produtos/${roupas.id}`}>Editar</Link></td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>
                Total de registros - <span>{lista.length}</span>
              </td>
            </tr>
          </tfoot>
        </table>

      </div>
    );
  }