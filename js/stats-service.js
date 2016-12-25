const restURL = 'https://intensive-ecmascript-server-zevreglhzz.now.sh/guess-melody/stats/';
const userId = '166288';


export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return {minutes, seconds};
};

export const calcStats = (stats, points, time, fTime) => {
  let newStats = JSON.parse(JSON.stringify(stats));
  const currentResult = {
    time: time,
    answers: points,
    recent: true
  };
  newStats.push(currentResult);
  const totalResultsNum = newStats.length;
  let currentGamePlace = totalResultsNum;

  newStats.sort((a, b) => {
    if (a.answers === b.answers) {
      return a.time - b.time;
    }
    return b.answers - a.answers;
  });

  newStats.find((el, idx) => {
    if (el.recent === true) {
      currentGamePlace = idx + 1;
      return true;
    }
    return false;
  });

  const successPercent = Math.round((totalResultsNum - currentGamePlace) / totalResultsNum * 100);

  return {time: fTime, correctAnswers: currentResult.answers, percents: successPercent};
};

export const getStats = (gameQuestions, gameTime, fTime) => {

  return fetch(restURL + userId,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then((res) => {
        return res.json();
      })
      .then((statsArr) => {
        return calcStats(statsArr, gameQuestions, gameTime, fTime);
      });
};

const displayUploadStatus = (text) => {
  const successResult = document.createElement('div');
  successResult.innerHTML = text;
  successResult.classList.add('server-upload');
  document.body.appendChild(successResult);

  setTimeout(() => {
    const elem = document.body.querySelector('.server-upload');
    elem.parentNode.removeChild(elem);
  }, 3000);
};

export const setStats = (newRecord) => {
  fetch(restURL + userId,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newRecord)
    })
      .then((res) => {
        displayUploadStatus('Ваш результат загружен на сервер!');
      })
      .catch((res) => {
        displayUploadStatus('Не удалось загрузить ваш результат на сервер :-(');
      });
};
