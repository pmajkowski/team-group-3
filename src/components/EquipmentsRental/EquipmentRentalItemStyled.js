import styled from "styled-components";

export const SingleImageClass = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: azure;
  display: flex;
  flex-direction: column;
  max-width: 225px;
`;
export const ImageEffectClass = styled.div`
    transition: transform 0.2s ease-in-out;
    border-radius: 10px;
    img {
        border-radius: 10px;
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
