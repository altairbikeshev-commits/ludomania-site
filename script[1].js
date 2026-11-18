const quizForm = document.querySelector('#quizForm');
const quizResult = document.querySelector('#quizResult');

quizForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const checkedAnswers = quizForm.querySelectorAll('input[name="answer"]:checked');
  const count = checkedAnswers.length;

  if (count === 0) {
    quizResult.textContent = 'Вы не отметили ни одного утверждения. Если тема вас беспокоит, изучите информацию выше.';
  } else if (count <= 2) {
    quizResult.textContent = 'Вы отметили ' + count + ' пункт(а). Это не диагноз, но стоит обратить внимание на свои игровые привычки.';
  } else {
    quizResult.textContent = 'Вы отметили ' + count + ' пунктов. Возможно, стоит обсудить ситуацию с психологом или специалистом по зависимостям.';
  }
});
