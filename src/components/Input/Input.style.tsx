import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
`;

export const Input = styled.input`
  border-color: #a855f7;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #f1f5f9;
  :focus {
    outline: none;
    background-color: white;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;
