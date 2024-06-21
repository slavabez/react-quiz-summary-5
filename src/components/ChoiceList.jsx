// src/ChoiceList.js
import React from 'react';

const ChoiceList = ({ choices, selectedAnswer, handleAnswerSelect, showAnswer, correctAnswer }) => {
    return (
        <ul className="choices">
            {choices.map(choice => (
                <li key={choice} style={{ color: showAnswer && choice === correctAnswer ? 'green' : '' }}>
                    <label>
                        <input
                            type="radio"
                            value={choice}
                            checked={selectedAnswer === choice}
                            onChange={() => handleAnswerSelect(choice)}
                            disabled={showAnswer}
                        />
                        {choice}
                        {showAnswer && choice === correctAnswer && <span> (Правильный ответ)</span>}
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default ChoiceList;
