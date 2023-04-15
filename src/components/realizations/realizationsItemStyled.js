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
export const SingleBigImageClass = styled.div`
padding: 30px;
background-color:white;
max-width: 90%;
max-height: 90%;
object-fit: contain;
border: 1px solid #fff;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
img {
width: 640px;
height: 480px;
cursor: pointer;
}
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