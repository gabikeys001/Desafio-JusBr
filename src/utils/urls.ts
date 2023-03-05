const TJAL_URL =
  "https://www2.tjal.jus.br/cpopg/show.do?processo.codigo=01000O7550000&processo.foro=1&processo.numero=";
const TJCE_URL =
  "https://esaj.tjce.jus.br/cpopg/show.do?processo.codigo=01Z081I9T0000&processo.foro=1&processo.numero=";

const tribunalUrls = {
  "tjal.jus.br": "cpopg/showMultiple.do",
  "tjce.jus.br": "cpopg/openWindow.do?conversationId=",
};

export { TJAL_URL, TJCE_URL, tribunalUrls };