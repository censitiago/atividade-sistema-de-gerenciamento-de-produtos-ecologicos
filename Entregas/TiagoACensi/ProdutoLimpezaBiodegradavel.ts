import { ProdutoEcologico } from "./ProdutoEcologico";

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;
    prodsbio: Array<ProdutoLimpezaBiodegradavel> = [];

    exibir(): void {
        console.log(`nome prod: ${this.nome} preco: ${this.preco} volume: ${this.volume}`);
    }

    inserir(produto: ProdutoLimpezaBiodegradavel): void {
        this.prodsbio.push(produto);
        console.log("O produto de limpeza biodegradavel foi inserido");
    }

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }
}
const plb = new ProdutoLimpezaBiodegradavel("detergente", 5, 7);
plb.inserir(plb);
plb.exibir();



