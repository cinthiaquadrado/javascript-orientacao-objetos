import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Cinthia", 111222333444);
const cliente2 = new Cliente("Vinicius", 111222333444);

const contaCorrenteCinthia = new ContaCorrente(1001, cliente1);
contaCorrenteCinthia.depositar(500);

const contaCorrenteVinicius = new ContaCorrente(1001, cliente2);
contaCorrenteVinicius.depositar(500);

console.log(ContaCorrente.numeroDeContas);
