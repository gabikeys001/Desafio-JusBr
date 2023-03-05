import { Router } from "express";
import { buscarProcesso } from "./crawler";

const router = Router();

router.get("/processos", async (request, response) => {
  const { numeroProcesso } = request.body;

  if (!numeroProcesso) throw Error();

  try {
    const resultado = await buscarProcesso(numeroProcesso);

    return response.status(200).json(resultado);
  } catch (error: any) {
    response.status(400).json({ message: error.message || "Erro inesperado" });
  }
});

export { router };
