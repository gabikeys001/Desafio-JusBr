
import supertest from "supertest";
import { buscarProcesso } from "../crawler";
import app from "../app";


const request = supertest(app);

describe("Integração entre a API e o crawler", () => {
  it("Retorna os dados do processo buscado", async () => {
    const numeroProcesso = "0801828-53.2022.8.02.0001";

    const processo = await buscarProcesso(numeroProcesso);

    const response = await request.get(`/processos/${numeroProcesso}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(processo);
  });

  it("Retorna erro ao buscar processo inválido", async () => {
    const numeroProcesso = "0000000-00.0000.0.00.0000";

    const response = await request.get(`/processos/${numeroProcesso}`);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
  });
});
