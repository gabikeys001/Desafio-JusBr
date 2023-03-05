import { processoMock } from "../mocks/processoMock";

describe("Testes do mock de um processo", () => {
  test("deve retornar uma instancia de um Processo", () => {
    expect(processoMock.classe).toEqual("Classe do processo");
    expect(processoMock.partes.length).toBeGreaterThan(0);
  });
});
