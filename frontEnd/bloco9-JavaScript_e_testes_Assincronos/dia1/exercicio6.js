// Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido 
// ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na 
// função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em 
// caso de falha.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...

const sendMarsTemperature = (callback, callbackError) => {
    const diceNumber = Math.floor(Math.random() * 10) + 1;
    const temperatura = getMarsTemperature();
    const roboOcupado = 'Robot is busy.'
    if (diceNumber <= 6) {
        setTimeout(() => callback(temperatura), messageDelay());
    } else {
        setTimeout(() => callbackError(roboOcupado), messageDelay());
    }
} 

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);