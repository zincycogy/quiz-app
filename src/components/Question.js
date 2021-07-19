import {useContext} from 'react';
import {QuizContext} from "../contexts/Quiz"
import { Answer } from './Answer';

export const Question = () => {
	const [quizState, dispatch] = useContext(QuizContext);
	const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
	return (
		<div>
			<div className="question">{currentQuestion.question}</div>
			<div className="answers">
				{quizState.answers.map((answer, index) =>(
					<Answer
						answerText= {answer}
						currentAnswer={quizState.currentAnswer}
						correctAnswer={currentQuestion.correctAnswer}
						key={index}
						index={index}
						onSelectAnswer={(answerText) =>
							dispatch({type: 'SELECT_ANSWER', payload: answerText})}
						/>
					) )}
			</div>
		</div>
	)
}
