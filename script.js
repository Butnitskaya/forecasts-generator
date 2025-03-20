const predictions = [
    "Сегодня тебя ждет удача!",
    "Завтра ты встретишь старого друга.",
    "На этой неделе тебя ждет неожиданный сюрприз.",
    "Скоро ты получишь хорошие новости.",
    "Твои мечты начнут сбываться."
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePrediction() {
    const randomIndex = getRandomNumber(0, predictions.length - 1);
    const predictionText = predictions[randomIndex];

    const probability = getRandomNumber(0, 100);

    return {
        text: predictionText,
        probability: `${probability}%`
    };
}

function displayCurrentPrediction() {
    const currentForecast = document.querySelector('.current-forecast');
    const prediction = generatePrediction();

    currentForecast.querySelector('h1').textContent = prediction.text;
    currentForecast.querySelector('p').textContent = `Вероятность: ${prediction.probability}`;

    addPredictionToList(prediction);
}

function addPredictionToList(prediction) {
    const forecastsContainer = document.querySelector('.forecasts');
    const forecastTemplate = document.getElementById('forecast-item');

    const forecastItem = forecastTemplate.content.cloneNode(true);

    forecastItem.querySelector('h3').textContent = prediction.text;
    forecastItem.querySelector('p').textContent = `Вероятность: ${prediction.probability}`;

    forecastsContainer.prepend(forecastItem);
}

document.querySelector('.forecast-btn').addEventListener('click', displayCurrentPrediction);