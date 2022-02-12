import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  console.log(questions);
  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        {questions.map((question) => {
          console.log(question);
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </main>
  );
}

export default App;
