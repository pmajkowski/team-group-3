import styled from "styled-components";

export const SingleImageClass = styled.div`
  padding: 10px;
  border: 1px solid lightgrey;
  background-color: white;
  display: flex;
  flex-direction: column;
  max-width: 225px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
    img {
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
}
img:hover {
    transform: scale(1.2); 
}
`