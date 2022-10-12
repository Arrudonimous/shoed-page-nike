import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5vh 5vh;
  width: 100vw;
  height: 92vh;
  position: absolute;
  img{
    width: 53vw;
    height: 82vh;

    @media(min-width: 830px) and (max-width: 1300px){
      width: 50vw;
      height: 30vh;
    }

    @media(max-width: 390px){
      widht: 700px;
      height: 300px;
    }
  }

  @media(min-width: 830px) and (max-width: 1100px){
    padding-top: 34vh;
  }

  @media(max-width: 390px){
    display: flex;
    justify-content: center;
    padding: 0;
    align-items: center;
    width: 100%;
    height: 52vh;
    position: relative;
  }
`;
