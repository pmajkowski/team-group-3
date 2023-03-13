import styled from "styled-components";

export const Container = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 35px;
  max-width: 1080px;
  margin: 45px 0px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  background-color: transparent;
  position: relative;
`;
export const Input = styled.input`
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  position: relative;
  width: 100%;
  border-color: #495057;
  outline: none;
  &:focus {
    border-color: blue;
    box-shadow: 0px 0px 10px #17a2b8;
  }

`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const Instruction = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

export const NamePhone = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const Email = styled.div`
  display: flex;

  justify-content: space-around;
  padding: 8px 16px;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 16px;
`;

