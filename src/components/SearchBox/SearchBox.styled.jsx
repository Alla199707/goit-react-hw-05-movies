import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  height: 20px;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid orangered;
  font: inherit;
`;

export const SearchButton = styled.button`
  display: inline-block;
  height: 35px;
  padding: 8px 16px;
  border-radius: 4px;
  margin-left: 4px;
  justify-content: center;
  border: none;
  text-decoration: none;
  background-color: orangered;
  color: white;
  cursor: pointer;

  font-weight: 500;
`;
