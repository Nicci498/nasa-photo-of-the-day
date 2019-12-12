import styled from "styled-components";

//div   div.img   section.h1 p p

export const Main = styled.div`
    display:flex;
    flex-direction:column;
`

export const Img = styled.img`
    max-width:100%;
    max-height:70vh;
    margin-top:2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
`
export const Lower = styled.section`
    background-color:#182628;
`
export const Upper = styled.section`
    background-color:#182628;;
`

export const Title = styled.h1`
    font-size: 3rem;
    color: #3500D3;
    text-shadow: 0 0 3px #0C0032;
`

export const Date = styled.p`
    font-size: 2rem;
    color: #C1C8E4;
`

export const Description = styled.p`
    font-size: 1.8rem;
    color: #5AB9EA;
    margin:1%;
`