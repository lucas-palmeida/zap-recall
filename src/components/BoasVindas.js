import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function BoasVindas() {
    
    const [visivel, setVisivel] = useState("none");
    
    return (
        <BoasVindasCx visivel={visivel}>
            <img src={logo} alt="Logo" />
            <p>ZapRecall</p> 
            <button onClick={() => setVisivel("hidden")}>Iniciar Recall</button>
        </BoasVindasCx>
    )
}

const BoasVindasCx = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    visibility: ${props => props.visivel};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    img {
        width: 131px;
        height: 161px;
    }
    p {
        margin-top: 13px;
        margin-bottom: 30px;
        font-family: 'Righteous', sans-serif;
        font-size: 36px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: -0.012em;
        color: #FFFFFF;
    }
    button {
        height: 54px;
        width: 246px;
        border-radius: 5px;
        border: 1px solid #D70900;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 4px 0px #00000026;
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #D70900;
    }
`;
