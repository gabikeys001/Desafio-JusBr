export class Movimentacao {
  data: string;
  movimento: string;
}

export class Processo {
  classe: string;
  area: string;
  assunto: string;
  dataDistribuicao: string;
  juiz: string;
  valorAcao: string;
  partes: string[];
  movimentacoes: Movimentacao[];
}
