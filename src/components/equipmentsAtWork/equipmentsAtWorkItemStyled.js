import styled from "styled-components";

export const SingleImageClass = styled.div`
    padding: 10px;
    border-radius: 10px;
    background-color:azure; 
    img {
    transition: transform 0.2s ease-in-out;
    border-radius: 10px;
    cursor: pointer;
}
img:hover {
    transform: scale(1.2); 
}
`