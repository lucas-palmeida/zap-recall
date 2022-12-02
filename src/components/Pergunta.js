import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/vector.svg";

export default function Pergunta({index, questao, resposta}) {
    const [exibePergunta, setExibePergunta] = useState(false);
    const [exibeResposta, setExibeResposta] = useState(false);
    return (
        <>
        {!exibePergunta && <PerguntaCx>
            <p>Pergunta {index +1}</p>
            <img src={setaPlay} alt="Play" onClick={() => setExibePergunta(true)} />
        </PerguntaCx>}
        {exibePergunta && 
        <PerguntaCard>
            <p>{questao}</p>
            <img src={setaVirar} alt="Virar" onClick={() => setExibeResposta(true)} />
        </PerguntaCard> }
        
        {exibeResposta && 
        <RespostaCard>
            <p>{resposta}</p>
            <button>Não lembrei</button>
            <button>Quase não lembrei</button>
            <button>Zap!</button>
        </RespostaCard>}
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
    }
`;

const PerguntaCard = styled.li`
    height: 131px;
    width: 299px;
    border-radius: 5px;
    background-color: #FFFFD4;
    padding: 18px 15px;
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
    }
`;

const RespostaCard = styled.li`
    height: 131px;
    width: 299px;
    border-radius: 5px;
    background-color: #FFFFD4;
    padding: 18px 15px;
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
    button {
        height: 37px;
        width: 85px;
        border-radius: 5px;
    }
`;