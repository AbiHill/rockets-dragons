import styled from 'styled-components/macro';

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin: 0 auto;
`;

export const ToggleButton = styled.button`
  color: #071d36;
  padding: 12px 18px;
  font-size: 1rem;
  border-radius: 25px;
  background-color: #f4e5e4;
  margin: 10px;

  &:hover {
    background-color: #feef57;
    color: #071d36;
    cursor: pointer;
  }

  &:disabled {
    background-color: #feef57;
    color: #071d36;
  }
`;
