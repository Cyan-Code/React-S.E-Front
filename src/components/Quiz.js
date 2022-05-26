import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import { useFetch } from '../hooks/useFetch';

const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;

const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const Quiz = () => {
    // 'videogame/'
    const options = ['category', 'gamer', 'plataform', 'subCategory'];
    const [count, setCount] = useState(0);
    //const [questions, setQuestions] = useState([]);
    const [preferences, setPreferences] = useState({
        category: 0,
        plataform: 0,
        gamer: 0,
        subCategory: 0,
        style: '',
        multiplayerName: '',
    });
    const data = useFetch(`videogame/${options[count]}`);
    const pickAnswer = (e) => {
        let userAnswer = e.target.outerText;
        setPreferences({
            ...preferences,
            //! Esto debe ser igual a un id [options[count]]: userAnswer
        })
        setCount((count) => count ++);
    }

    useEffect(() => {
        
    }, [count]);


    return (
        <></>
        /**
         <QuizWindow>
             {quiz[number] &&
                 <>
                     <Question dangerouslySetInnerHTML={{ __html: data[count].question }}></Question>
                     <Options>
                         {data[number].options.map((item, index) => (
                             <Option key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></Option>
                         ))}
                     </Options>
                 </>
             }
         </QuizWindow>
         {
            count > 3 && <GameOver pts={pts} />
         }
         */
    )
}

export default Quiz
