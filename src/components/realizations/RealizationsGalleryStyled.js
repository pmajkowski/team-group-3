import styled from "styled-components";

export const SingleBigImageClass = styled.div`
padding: 10px;
border-radius: 10px;
background-color:azure;
max-width: 90%;
max-height: 90%;
object-fit: contain;
border: 1px solid #fff;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
img {
border-radius: 10px;
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