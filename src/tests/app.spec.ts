interface RequestMock {
  body: any;
}

interface ResponseMock {
  status: any;
  json: any;
}

const mockRequest = (numeroProcesso: string) => {
  return {
    body: { numeroProcesso },
  };
};

const mockResponse = () => {
  const response: ResponseMock = {
    status: jest.fn(),
    json: jest.fn(),
  };

  response.status = jest.fn().mockReturnValue(response);
  response.json = jest.fn().mockReturnValue(response);
  return response;
};

async function buscarProcessoMock(req: RequestMock, res: ResponseMock) {
  const { numeroProcesso } = req.body;

  if (numeroProcesso !== "12345") return res.status(400);

  return res.status(200);
}

describe("Testes de mock de um servidor", () => {
  test("Deve requisitar um número de processo obrigatório", async () => {
    const request = mockRequest("12345");

    expect(request.body).toHaveProperty("numeroProcesso");
    expect(request.body.numeroProcesso).toBe("12345");
  });

  test("Deve esperar uma resposta OK de um processo", async () => {
    const request = mockRequest("12345");
    const response = mockResponse();

    const result = await buscarProcessoMock(request, response);

    expect(result.status).toHaveBeenCalledWith(200);
  });

  test("Deve esperar um erro na chamada", async () => {
    const request = mockRequest("123");
    const response = mockResponse();

    const result = await buscarProcessoMock(request, response);

    expect(result.status).toHaveBeenCalledWith(400);
  });
});
