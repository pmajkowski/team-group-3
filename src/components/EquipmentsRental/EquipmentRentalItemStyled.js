import styled from "styled-components";

export const SingleImageClass = styled.div`
    padding: 10px;
    border-radius: 10px;
    background-color:azure; 
    
`
export const ImageEffectClass = styled.div`
    transition: transform 0.2s ease-in-out;
    border-radius: 10px;
    &:hover {
        transform: scale(0.9); 
    }
`
export const EquipmentData = styled.div`
width: 200px;
li:first-child {
    font-weight: 700;
    margin-bottom: 10px;
}
li:last-child {
    border-top: 1px dotted black;
    margin-top: 20px;
    font-size: 12px;
}
li {

    overflow: hidden;
}

`