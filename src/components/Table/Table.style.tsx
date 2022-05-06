import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-image: linear-gradient(to right, #a855f7, #6b21a8);
  color: white;
`;

export const Th = styled.th`
  text-align: left;
  padding: 1rem;
`;

export const ThActions = styled.th`
  text-align: center;
  padding: 1rem;
`;

export const Td = styled.td`
  text-align: left;
  padding: 1rem;
`;

export const TdButton = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const TrTbody1 = styled.tr`
  background-color: #f3e8ff;
`;

export const TrTbody2 = styled.tr`
  background-color: #e9d5ff;
`;

export const ButtonEdit = styled.button`
  color: #16a34a;
  border-radius: 9999px;
  padding: 0.2rem;
  &:hover {
    background-color: #faf5ff;
  }
`;

export const ButtonDelete = styled.button`
  color: #ef4444;
  border-radius: 9999px;
  padding: 0.2rem;
  &:hover {
    background-color: #faf5ff;
  }
`;
