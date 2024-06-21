// src/Score.js
import React from 'react';

const Score = ({ score, totalQuestions }) => {
    return (
        <div className="score-container">
            <h1>Экзамен закончен!</h1>
            <p className="score">Ваши баллы: {score}/{totalQuestions}</p>
        </div>
    );
};

export default Score;
