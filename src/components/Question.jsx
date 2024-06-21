// src/Question.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ChoiceList from './ChoiceList';

const Question = ({ question, selectedAnswer, handleAnswerSelect, showAnswer }) => {
    return (
        <div>
            <p className="question">{question.question}</p>
            {question.codeSnippet && (
                <SyntaxHighlighter language="javascript" style={materialDark} className="code-snippet">
                    {question.codeSnippet}
                </SyntaxHighlighter>
            )}
            <ChoiceList
                choices={question.choices}
                selectedAnswer={selectedAnswer}
                handleAnswerSelect={handleAnswerSelect}
                showAnswer={showAnswer}
                correctAnswer={question.answer}
            />
        </div>
    );
};

export default Question;
