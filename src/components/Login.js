import React from 'react'
import styled, { css } from 'styled-components/macro'
import { useForm } from '../hooks/useForm';
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;

const Login = ({props}) => {

    const startQuiz = () => props(true);

    const [{email, nombre}, handleInputChange] = useForm({
        email:'',
        nombre: '',
    });

    const handleSesion = () => {
        console.log(email, nombre)
        startQuiz();
    }

    return (
        <Intro>
            <h1>Y... ¿Cual es el siguiente VideoJuego?</h1>
            <form onSubmit={handleSesion}>
                <span>Su correo: </span>
                <div>
                    <input
                        type="text"
                        className=""
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Ejemplo@.com"
                    />
                </div>
                <span>Su Nombre: </span>
                <div>
                    <input
                        type="text"
                        className=""
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        placeholder="Su nombre"
                    />
                </div>
            <Button type='submit' css={btnCSS}>Iniciar</Button>
            </form>
            <h4>
                <ion-icon name="rocket-outline">   </ion-icon>
                <ion-icon name="golf-outline">     </ion-icon>
                <ion-icon name="sparkles-outline"> </ion-icon>
                <ion-icon name="football-outline"> </ion-icon>
                <ion-icon name="rocket-outline">   </ion-icon>
            </h4>
        </Intro>
    )
}

export default Login
