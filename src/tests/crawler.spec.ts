import puppeteer from "puppeteer";
import { TJAL_URL } from "../utils/urls";

describe("Testes do puppeteer", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  test("Deve clicar no botão de mais após acessar a URL do TJAL", async () => {
    const numeroProcesso = "0710802-55.2018.8.02.0001";

    const url = `${TJAL_URL}${numeroProcesso}`;

    await page.goto(url);

    const botaoMais = await page.$(".unj-link-collapse__show");

    expect(botaoMais).toBeDefined();
  });

  afterAll(() => browser.close());
});
