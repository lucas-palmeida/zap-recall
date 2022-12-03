import styled from "styled-components"

export default function Contador({questoes, contagem}) {
    return (
        <ContadorCx>
            <p>{contagem}/{questoes.length} CONCLUÍDOS</p>
        </ContadorCx>
    )
}

const ContadorCx = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -4px 6px 0px #0000000D;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: #FFFFFF;
    p {
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #333333;
    }
`;