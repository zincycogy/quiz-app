
import { Quiz } from './components/Quiz';
import { QuizProvider } from './contexts/Quiz';

function App() {
  return (
    <div className="App">
			<QuizProvider>
    <Quiz/>
		</QuizProvider>
    </div>
  );
}

export default App;
