import { Link } from "react-router-dom";
// import { listaProdutos } from "../../data/listaProdutos";
import {listaProdutos} from "../../data/listaProdutos.json";
export default function Produtos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "PRODUTOS";

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
              {listaProdutos.map((roupas)=>(
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
                Total de registros - <span>{listaProdutos.length}</span>
              </td>
            </tr>
          </tfoot>
        </table>

      </div>
    );
  }