import styled from 'styled-components/macro';

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  justify-content: center;
`;

export const ListItem = styled.li`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  padding: 20px;
`;

export const ListImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const ListButton = styled.div`
  padding: 10px;
  text-align: center;
  color: pink;

  &:hover {
    color: yellow;
    cursor: pointer;
  }
`;
