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
export const SingleImageClassD = styled.div`
  padding: 30px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  img {
    width: 640px;
  height: 480px;

    cursor: pointer;
  }
`;
export const EquipmentDataD = styled.div`
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
  gap: 5px;
`;
export const SelectedImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

