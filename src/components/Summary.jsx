import image from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const sippedAnswersShare =
    Math.round((skippedAnswers.length / userAnswers.length) * 100);
  const correctAnswersShare =
    Math.round((correctAnswers.length / userAnswers.length) * 100);
  const wrongAnswersShare = 100 - sippedAnswersShare - correctAnswersShare;
  return (
    <div id="summary">
      <img src={image} alt="Trophy image" />
      <h2> Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{sippedAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Correct answers</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">Wrong answers</span>
        </p>
      </div>
        <ol>
          {userAnswers.map((answer, index) => {
            let cssClass = "user-answer";

            if (answer === null) {
              cssClass += " skipped";
            } else if (answer === QUESTIONS[index].answers[0]) {
              cssClass += " correct";
            } else {
              cssClass += " wrong";
            }
            return (
              <li key={answer}>
                <h3>{index + 1}</h3>
                <p className="question">{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer ?? "Skipped"}</p>
              </li>
            );
          })}
        </ol>
    </div>
  );
}
