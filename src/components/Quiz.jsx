// src/Quiz.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Question from './Question';
import Score from './Score';
import './Quiz.css';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        axios.get('/questions.json')
            .then(response => setQuestions(response.data))
            .catch(error => console.error('Error fetching questions:', error));
    }, []);

    const handleAnswerSelect = (choice) => {
        setSelectedAnswer(choice);
    };

    const handleSubmit = () => {
        if (selectedAnswer === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        setShowAnswer(true);
    };

    const handleNextQuestion = () => {
        setSelectedAnswer('');
        setShowAnswer(false);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return <Score score={score} totalQuestions={questions.length} />;
    }

    if (questions.length === 0) {
        return <div className="quiz-container">Loading...</div>;
    }

    return (
        <div className="quiz-container">
            <h1>Экзамен</h1>
            <Question
                question={questions[currentQuestionIndex]}
                selectedAnswer={selectedAnswer}
                handleAnswerSelect={handleAnswerSelect}
                showAnswer={showAnswer}
            />
            <div className="button-container">
                {!showAnswer ? (
                    <button onClick={handleSubmit} disabled={!selectedAnswer}>Ответить</button>
                ) : (
                    <button onClick={handleNextQuestion}>Дальше</button>
                )}
            </div>
        </div>
    );
};

export default Quiz;
