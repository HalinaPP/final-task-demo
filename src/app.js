const express = require('express');
const app = express();
const { createAndAccessSecret } = require('./secrets-service');

//get secrets 
/*const DATABASE_USER = await secretsService.accessSecret('DATABASE_USER');
const DATABASE_PASSWORD = await secretsService.accessSecret('DATABASE_PASSWORD');
const secretsString = `database: ${DATABASE_NAME}, user: ${DATABASE_USER}, password: ${DATABASE_PASSWORD}`;
*/

app.use('/', async (req, res, next) => {
  if (req.originalUrl === '/') {
 /*   const DATABASE_NAME = await createAndAccessSecret('DATABASE_NAME');
    const DATABASE_USER = "";//await createAndAccessSecret('DATABASE_USER');
    const DATABASE_PASSWORD = "";// await createAndAccessSecret('DATABASE_PASSWORD');
    const secretsString = `database: ${DATABASE_NAME}, user: ${DATABASE_USER}, password: ${DATABASE_PASSWORD}`;
*/
    res.send(`Service is running! OK!!! Deployment`);
    return;
  }
  next();
});
/*const cors = require('cors');

const { loging } = require('./common/logging');
const { handler } = require('./errors/errorHandler');
const { router } = require('./resources/users/user.router');

const app = express();

app.use(express.json());

app.use(loging);

app.use(cors({ credentials: true, origin: '*' }));
app.options('*', cors());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', router);

app.use(handler);
*/
module.exports = { app };



const scoreStar = round.querySelector(".score_div");
scoreStar.addEventListener("click", () =>
  this.scoreClickHandler(this.kindData, groupData)
);

const initScoreStar = (groupData) => {
  const scoreStar = round.querySelector(".score_div");

  scoreStar.addEventListener("click", () =>
  this.scoreClickHandler(this.kindData, groupData)
);
}

const startQuiz = round.querySelector(".show_questions");
startQuiz.addEventListener("click", () => {
  this.roundClickHandler(groupData, this.kindData);
});

if(isUserAnswer){ 
    questionStatus = question.isUserAnswerCorrect ? 'correct' : 'uncorrect';
}else{
  const isCurrentQuestion = (array[i-1] && array[i-1].userAnswer || i === 0) && !(array[i+1] && array[i+1].userAnswer;
  questionStatus = isCurrentQuestion ? 'active' : '';
  }

const questionIconClassName = questionStatus!=="" ? `questions-numers-list__item__${questionStatus}` : '';

questionIcon.classList.add(questionIconClassName);

 
if (value >3) {
  this._gameDifficulty = 3;
}


this.initScoreStar(groupData)

const createLevel = (obj) => {
  const groupHtml = categoryTemplate
  .replace("{{title}}", isDone ? `${roundResult}/10` : groupData.title)
  .replace("{{image}}", imageFactPath)
  .replace("{{extra}}", isDone ? "no_overlay" : "");  
  return createElementFromHTML(groupHtml);
}

const level = createLevel(obj);
categoryRoot.appendChild(level);

const fn = () => {
  this.roundClickHandler(groupData, this.kindData);
}

const QUESTIONS_ROUND_AMOUNT = 10;
const ANSWER_COLOR = {'right': , 'wrong':}

const uniqueAuthors = getUniqueAuthors();
const maxIndex = uniqueAuthors.length;
const optionsIndex = getAuthorIndexes(maxIndex, [], indexAmount);

const getAuthorIndexes = (maxIndex, optionsIndex, indexAmount) =>{

  const newOptIndex = [];
  for(let num=0; num<indexAmount-1; num++){
    const uniqueIndex = getUniqueIndex(maxIndex, optionsIndex);
    newOptIndex.push(uniqueIndex);
  }
  return newOptIndex;
}



Object.keys(JSON.parse(localStorage.getItem(DataLocalStorageProvider.localStorageItemName)))

const getLocalStorageItemName = (DataLocalStorageProvider) => {
   localStorage.getItem(DataLocalStorageProvider.localStorageItemName);
}

const parseLocalItem = getLocalStorageItemName(DataLocalStorageProvider);

 return Object.keys(parseLocaItem).length > 0 ? parseLocalItem : null;


const getUniqueIndex = (maxIndex, optionsIndex) =>{
const index = Math.random()*maxIndex;
  return optionsIndex.includes(index)  ? getUniqueIndex(maxIndex, newOptIndex) : index;
}

