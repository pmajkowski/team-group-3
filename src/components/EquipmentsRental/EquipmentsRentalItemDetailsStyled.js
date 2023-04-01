import styled from "styled-components";

export const SingleImageClass = styled.div`
padding: 10px;
border-radius: 10px;
background-color: azure;
display: flex;
flex-direction: column;
max-width: 90%;
max-height: 90%;
object-fit: contain;
border: 1px solid #fff;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
img {
border-radius: 10px;
cursor: pointer;
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
`
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
`