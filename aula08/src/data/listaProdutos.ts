import { TipoProduto } from "../types";

const imagem = "https://i.imgflip.com/2/3qfwq1.jpg";

export const listaProdutos: TipoProduto[] = [
        {
            id:1,
            nome: "Calça",
            preco: 70.80,
            foto: imagem
        },
        {
            id:2,
            nome: "Tenis",
            preco: 270.80,
            foto: imagem
        },
        {
            id:3,
            nome: "Camisa",
            preco: 40.80,
            foto: imagem
        },
        {
            id:4,
            nome: "Cinto",
            preco: 20.80,
            foto: imagem
        }
    ];

    if(!localStorage.getItem("lista")){
        localStorage.setItem("lista",JSON.stringify(listaProdutos))
    }