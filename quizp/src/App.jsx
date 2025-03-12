import React, {useState} from 'react'
import { quiz } from './assets/mock'
import './App.css'

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [index, setIndex] = useState(1);
  const styles = {
    option: {
      padding: "5px",
      margin: "5px 5px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      cursor: "pointer",
      transition: "0.3s",
      backgroundColor: "white",
      textAlign: "center",
  
    },
    nextButton: {
      marginTop: "10px",
      padding:"10px 70px" ,
      backgroundColor: "#282b63",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    ul:{
      margin:"0px"
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    setIndex(index+1);
    setShowAnswer(false);
    setSelectedOption(null);
    setCurrentQuestion((prev) => (prev < 14 ? prev + 1 : 0) % quiz.length);
  };

  return (
    <div className="page">
    <div className="container">
      <div>
        <h2 className='head'>Simple Quiz</h2>
        < hr />
       <h3>{index}.{quiz[currentQuestion].question}</h3>
        <ul style={styles.ul}>
        {quiz[currentQuestion].options.map((option, index) => (
            <li
              key={index}
              style={{
                ...styles.option,
                backgroundColor: showAnswer
                  ? option === quiz[currentQuestion].answer
                    ? "lightgreen"
                    : option === selectedOption
                    ? "lightcoral"
                    : "white"
                  : "white",
                  listStyle: 'none'
              }}
              onClick={() => !showAnswer && handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
        {showAnswer}
        <button style={styles.nextButton} onClick={nextQuestion}>
            Next 
          </button>
      <h5> {index} of {quiz.length} questions</h5>
      </div>
    </div>
    </div>
  )
}

export default App