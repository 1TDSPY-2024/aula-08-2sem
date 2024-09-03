export type TipoProduto = {
    id:number,
    nome: string,
    preco: number,
    foto : string
    
}
const imagem_jailson = "https://upload.wikimedia.org/wikipedia/pt/8/8d/Jailson_Mendes.jpg";

export const listaProdutos: TipoProduto[] = [
        {
            id:1,
            nome: "Calça",
            preco: 70.80,
            foto: imagem_jailson
        },
        {
            id:2,
            nome: "Tenis",
            preco: 270.80,
            foto: imagem_jailson
        },
        {
            id:3,
            nome: "Camisa",
            preco: 40.80,
            foto: imagem_jailson
        },
        {
            id:4,
            nome: "Cinto",
            preco: 20.80,
            foto: imagem_jailson
        }
    ]