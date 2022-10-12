import styled from 'styled-components';

export const Container = styled.div`
  height: 92vh;
  width: 50%;
  background-color: #74D3FF;
  display: flex;
  /* justify-content: flex-end;; */

  @media(max-width: 390px){
    padding: 0px 31px;
    width: 100vw;
    height: 52vh;
    justify-content: center;
    align-items: center;
  }
`;
