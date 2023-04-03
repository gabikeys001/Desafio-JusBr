import puppeteer from 'puppeteer-mock';

const mockedPuppeteer = puppeteer();

mockedPuppeteer.launch = () => {
  return {
    newPage: () => {
      return {
        setViewport: () => {},
        goto: () => {},
        waitForSelector: () => {},
        evaluate: () => {
          // Aqui você pode adicionar um objeto com os dados que você quer retornar no lugar da extração real
          return {
            title: 'Mocked title',
            description: 'Mocked description',
            // etc...
          };
        },
      };
    },
  };
};

export default mockedPuppeteer;
