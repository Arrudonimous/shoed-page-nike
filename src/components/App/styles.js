import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media(max-width: 390px){
    flex-direction: column;
    width: 100%;
  }
`;
