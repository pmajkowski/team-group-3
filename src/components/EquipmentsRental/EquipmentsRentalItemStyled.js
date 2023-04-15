import styled from "styled-components";

export const SingleImageClass = styled.div`
  padding: 10px;
border: 1px solid lightgrey;
  background-color: white;
  display: flex;
  flex-direction: column;
  max-width: 225px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
`
export const ImageEffectClass = styled.div`
    transition: transform 0.2s ease-in-out;

    img {

        cursor: pointer;
    }
    &:hover {
        transform: scale(0.9); 
    }
`
export const EquipmentData = styled.div`
  li {
    list-style: none;
    text-align: center;
  }
  li:first-child {
    font-weight: 700;
    margin-bottom: 10px;
  }
  li:last-child {
    border-top: 1px dotted black;
    margin-top: 20px;
    font-size: 12px;
  }
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
`;
