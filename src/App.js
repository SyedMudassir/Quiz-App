import './App.css';
import QuizComp from "./components/quiz-comp";
import swal from 'sweetalert';

function App() {
  const questions = [
    {
      title: '1) What is HTML Stand for?',
      options: ['hyper text markup language', 'text markup languaeg', 'hyper text language', ' markup language'],
      answer: 'hyper text markup language',
      userAnswer: null
    },
    {
      title: '2) What is CSS Stand for?',
      options: ['Cascading Style Sheet', 'Cascading Sheet', 'Style Sheet', 'Style Sheet language'],
      answer: 'Cascading Style Sheet',
      userAnswer: null
    },
    {
      title: '3) What is JS Stand for?',
      options: ['java Sheet', 'javascript', 'java Style ', 'java script'],
      answer: 'javascript',
      userAnswer: null
    }
  ]

  const storeAnswer = (index, correctAnswer) => {
    questions[index].userAnswer = correctAnswer
  }

  const calcScore = (questions) => {
    const count = questions.filter(ques => ques.userAnswer === true).length * 10
    swal("Here's Your Score!", `${count}`);
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Quiz App</h1>
        <h4>Duration: 30 Minutes</h4>
        <h4>Marks: 30</h4>
      </div>
      {questions.map((ques, index) => {
        return <QuizComp key={index} question={ques} index={index} storeAnswer={storeAnswer} />
      })}
      <br />
      <button onClick={() => calcScore(questions)}>Submit</button>
    </div>
  );
}

export default App;
