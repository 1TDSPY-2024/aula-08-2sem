import { useParams } from "react-router-dom";
import { TipoProduto } from "../../types";
import { useEffect, useState } from "react";

export default function EditarProdutos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "EDITAR PRODUTOS";

      //Realizando um destructuring para recuperar o parâmetro que foi passado na rota:
      //Ex: Se a rota criada foi: /meus-dados/:dados
      //O destructuring irá recuperar o dado que foi passado na rota e atribuir a propriedade de um elemento cuja o nome é aquele criado na rota, antes do dois pontos,ou seja, (:dados)
      //Então teriamos que realizar a seguinte ação para receber esta informação.
      // const{dados} = useParams(), um detalhe aqui é que o useParams() pertence ao react-router e deve ser importado dele
      const {id} = useParams();
      const listaRoupasString = localStorage.getItem("lista")|| '[]';
      const lista:TipoProduto[] = JSON.parse(listaRoupasString);
      const [roupa,setRoupa] = useState<TipoProduto>();

      useEffect(()=>{
       setRoupa(lista.find((roupa)=> roupa.id == Number(id))) ;
      },[id]);

      return(
      <div>
        <h1>Olá, mundo sou o EditarProdutos!</h1>
        <div>
          <h2>ID: {id}</h2>
          <h2>nome: {roupa?.nome}</h2>
          <h2>preço: {roupa?.preco}</h2>
          <figure>
            <img src={roupa?.foto} alt={roupa?.nome}></img>
          </figure>
          
        </div>
      </div>
    );
  }