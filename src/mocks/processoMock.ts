import { Processo } from "../models/Processo";

export const processoMock: Processo = {
  classe: "Classe do processo",
  area: "Área do processo",
  assunto: "Assunto do processo",
  dataDistribuicao: "Data de distribuição do processo",
  juiz: "Nome do juiz",
  valorAcao: "Valor da ação",
  partes: ["Nome da parte 1", "Nome da parte 2"],
  movimentacoes: [
    {
      data: "Data da movimentação 1",
      movimento: "Descrição do movimento 1",
    },
    {
      data: "Data da movimentação 2",
      movimento: "Descrição do movimento 2",
    },
  ],
};
