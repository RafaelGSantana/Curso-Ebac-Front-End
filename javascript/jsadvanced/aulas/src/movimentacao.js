class Movimentacao {
  constructor(banco = 'padrao', nome = '', saldo = 0) {
    this.banco = banco,
    this.nome = nome,
    this.saldo = saldo;
  }
}

class Registro {
  constructor(dia, mes, ano) {
    this.dia = dia,
    this.mes = mes,
    this.ano = ano;
    this.movimentacoes = [];
  }

  novaMovimentacao(...movimentacoes) {
    movimentacoes.forEach((lancamento) => this.movimentacoes.push(lancamento));
  }

  // Mesma funcionalidade do méotod resumo, porém remove o valor dos impostos
  faturamento() {
    let valorAtualizado = 0;
    let nomeLancamento = '';
    this.movimentacoes.forEach((lancamento) => {
      if (!lancamento.nome.match(/imposto/)) {
        valorAtualizado += lancamento.saldo;
        nomeLancamento += `${lancamento.nome} | `;
      }
    });

    return nomeLancamento + valorAtualizado;
  }

  resumo() {
    let valorAtualizado = 0;
    let nomeLancamento = '';
    this.movimentacoes.forEach((lancamento) => {
      valorAtualizado += lancamento.saldo;
      nomeLancamento += `${lancamento.nome} | `;
    });

    return nomeLancamento + valorAtualizado;
  }
}

const m01 = new Movimentacao('Bank X', 'salario', 20000);
const m02 = new Movimentacao('Bank X', 'comissao', 2000);
const m03 = new Movimentacao('Bank X', 'imposto', -5000);

const r01 = new Registro(17, 11, 2022);
r01.novaMovimentacao(m01, m02, m03);
console.log(`Tipo registros + Saldo do dia: ${r01.resumo()}`);
console.log(`Tipo registros + Faturamento: ${r01.faturamento()}`);
