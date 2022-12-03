import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/vector.svg";
import certo from "../assets/icone_certo.png";
import quase from "../assets/icone_quase.png";
import errado from "../assets/icone_erro.png";

export default function Pergunta({index, questao, resposta, contagem, setContagem}) {
    const [transicaoCard, setTransicaoCard] = useState(0);
    const [perguntaAberta, setPerguntaAberta] = useState(false);
    const coresStatus = [
        {cor: "#000000", statusImg: setaPlay},
        {cor: "#FF3030", statusImg: errado},
        {cor: "#FF922E", statusImg: quase},
        {cor: "#2FBE34", statusImg: certo}
    ];
    const [corSelecionada, setCorSelecionada] = useState(coresStatus[0]);

    function avancarCard(textoBotao) {
        setTransicaoCard(transicaoCard + 1);
        setPerguntaAberta(true);
        if(transicaoCard === 2) {
            setTransicaoCard(0);
            setContagem(contagem + 1);
        }
        if(textoBotao === "Zap!") {
            setCorSelecionada(coresStatus[3]);
        }
        else if(textoBotao === "Quase não lembrei") {
            setCorSelecionada(coresStatus[2]);
        }
        else if(textoBotao=== "Não lembrei") {
            setCorSelecionada(coresStatus[1]);
        }
    }

    return (
        <>
            {transicaoCard === 0 && <PerguntaCx perguntaAberta={perguntaAberta} corSelecionada={corSelecionada} data-test="flashcard-text">
                <p>Pergunta {index +1}</p>
                <img src={corSelecionada.statusImg} alt="Status icon" onClick={(perguntaAberta) ? null : avancarCard} data-test="play-btn no-icon zap-icon partial-icon" />
            </PerguntaCx>}
            {transicaoCard > 0 && 
            <PerguntaCard data-test="flashcard-text">
                {transicaoCard === 1 &&
                <>
                    <p>{questao}</p>
                    <img src={setaVirar} alt="Virar" onClick={avancarCard} data-test="turn-btn" />
                </>
                }
                {transicaoCard === 2 &&
                <>
                <p>{resposta}</p>
                    <BotaoResposta onClick={(e) => avancarCard(e.target.innerHTML)} cor="#FF922E" data-test="partial-btn" >Quase não lembrei</BotaoResposta>
                    <BotaoResposta onClick={(e) => avancarCard(e.target.innerHTML)} cor="#2FBE34" data-test="zap-btn" >Zap!</BotaoResposta>
                    <BotaoResposta onClick={(e) => avancarCard(e.target.innerHTML)} cor="#FF3030" data-test="no-btn" >Não lembrei</BotaoResposta>
                </>}
            </PerguntaCard> }
        </>
    )
}

const PerguntaCx = styled.li`
    height: 65px;
    width: 300px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px 0px #00000026;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 25px;
    box-sizing: border-box;
    p {
        font-family: 'Recursive', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: #333333;
        text-decoration: ${ props => props.perguntaAberta ? "line-through" : "none"};
        color: ${props => props.corSelecionada.cor};
    }
    img {
        cursor: pointer;
    }
`;

const PerguntaCard = styled.li`
    width: 299px;
    min-height: 131px;
    border-radius: 5px;
    background-color: #FFFFD4;
    padding: 18px 15px 55px;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin-bottom: 25px;
    p {
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #333333;
    }
    img {
        width: 30px;
        height: 20px;
        position: absolute;
        bottom: 6px;
        right: 15px;
        cursor: pointer;
    }
    button {
        position: absolute;
        bottom: 10px;
        &:nth-child(1) {
            left: 15px;
        }
        &:nth-child(2) {
            left: 107px;
        }
        &:nth-child(3) {
            right: 15px;
        }
    }
`;

const BotaoResposta = styled.button`
    height: 37px;
    width: 85px;
    border-radius: 5px;
    border: none;
    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    background-color: ${props => props.cor};
    cursor: pointer;
`;