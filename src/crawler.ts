import puppeteer from "puppeteer";
import { Movimentacao, Processo } from "./models/Processo";
import { TJAL_URL, TJCE_URL, tribunalUrls } from "./utils/urls";

async function buscarProcesso(numeroProcesso: string): Promise<Processo> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let url: string;

  const numeroProcessoInvalido =
    !numeroProcesso.includes("8.02") && !numeroProcesso.includes("8.06");

  if (numeroProcessoInvalido) throw new Error("Número de processo inválido");

  url = numeroProcesso.includes("8.02")
    ? `${TJAL_URL}${numeroProcesso}`
    : `${TJCE_URL}${numeroProcesso}`;

  // Verifica se o número do processo é de segundo grau
  if (numeroProcesso.includes(".0000.")) {
    const tribunalUrl = tribunalUrls[url];

    // Se for de segundo grau, adiciona a URL correspondente
    if (tribunalUrl) {
      url = url.replace("cpopg/show.do", tribunalUrl);
    }
  }

  await page.goto(url);

  const botaoMais = await page.$(".unj-link-collapse__show");

  if (botaoMais) {
    await botaoMais.click();

    // Esperar meio segundo para que as movimentações sejam carregadas
    await new Promise((res) => setTimeout(res, 500));
  }

  const resultado = await page.evaluate(() => {
    const tabelaMovimentacoes = document.querySelector(
      "#tabelaTodasMovimentacoes"
    );
    if (!tabelaMovimentacoes) {
      return null;
    }

    const linhasMovimentacoes = tabelaMovimentacoes.querySelectorAll("tr");
    if (!linhasMovimentacoes || linhasMovimentacoes.length < 3) {
      return null;
    }

    let movimentacoes: Movimentacao[] = [];

    for (let linhaMovimentacao of linhasMovimentacoes) {
      const colunas = linhaMovimentacao.querySelectorAll("td");

      let mov: Movimentacao = {
        data: colunas[0]?.textContent.trim(),
        movimento: colunas[2]?.textContent.trim().replace(/\n|\t/g, ""),
      };
      movimentacoes.push(mov);
    }

    const tabelaPartes = document.querySelector("#tablePartesPrincipais tbody");
    if (!tabelaPartes) {
      return null;
    }

    const linhasPartes = tabelaPartes.querySelectorAll("tr");
    if (!linhasPartes || linhasPartes.length < 1) {
      return null;
    }

    let partes: string[] = [];

    for (let linhaParte of linhasPartes) {
      const colunaNome = linhaParte.querySelector("td.nomeParteEAdvogado");
      const nome = colunaNome?.textContent.trim().replace(/\n|\t/g, "");
      partes.push(nome);
    }

    const classe = document.querySelector("#classeProcesso")?.textContent;
    const assunto = document.querySelector("#assuntoProcesso")?.textContent;
    const juiz = document.querySelector("#juizProcesso")?.textContent;
    const valorAcao = document
      .querySelector("#valorAcaoProcesso")
      ?.textContent.replace(/\n|\t/g, "");
    const dataDistribuicao = document.querySelector(
      "#dataHoraDistribuicaoProcesso"
    )?.textContent;
    const area = document.querySelector("#areaProcesso span")?.textContent;

    const processo: Processo = {
      classe: classe,
      area: area,
      assunto: assunto,
      dataDistribuicao: dataDistribuicao,
      juiz: juiz,
      valorAcao: valorAcao,
      partes: partes,
      movimentacoes: movimentacoes,
    };

    return processo;
  });

  await browser.close();
  return resultado;
}

export { buscarProcesso };
