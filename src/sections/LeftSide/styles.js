import styled from 'styled-components';

export const Container = styled.div`
  height: 92vh;
  width: 50%;
  background-color: #FFF;
  display: flex;
  justify-content: flex-start;
  
  @media(max-width: 390px){
    height: 50%;
    display: block;
    padding-bottom: 77px;
    padding-top: 79px;
  }
  
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 148px;
  justify-content: center;
  flex-direction: column;
  font-family: Kanit, sans-serif;
  h1{
    font-size: 54px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 3px;

    @media(min-width: 830px) and (max-width: 1100px){
      font-size: 44px;
    }
    @media(max-width: 390px){
      font-size: 42px;
    }

  }  
  small{
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 20px;

    @media(min-width: 830px) and (max-width: 1100px){
      font-size: 16px;
    }

    @media(max-width: 390px){
      font-size: 15px;
      margin-top: 15px;
      margin-bottom: 16px;
    }
  }

  span{
    font-size: 33px;
    font-weight: 600;

    @media(min-width: 830px) and (max-width: 1100px){
      font-size: 27px;
    }

    @media(max-width: 390px){
      font-size:26px;
    }
  }

  @media(min-width: 830px) and (max-width: 1100px){
    padding: 0 36px;
  }

  @media(max-width: 390px){
    padding: 0px 31px;
    width: 100vw;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media(min-width: 830px) and (max-width: 1100px){
    margin-top: 20px;
  }
  @media(max-width: 390px){
    margin-top: 18px;
  }
  button{
    color: #fff;
    text-transform: uppercase;
    font-size: 19px;
    color: #fff;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease-in;
    transition-delay: 0.05s;
    transition-duration: 0.2s;
    z-index: 1;
    &:hover{
      transform: translateY(-8%);
      box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    }

    @media(min-width: 830px) and (max-width: 1100px){
      font-size: 15px;
    }

    @media(max-width: 390px){
      font-size: 15px;
    }
  }

  .details{
    background-color: #a4a4a4;
    padding: 20px 13px;

    @media(min-width: 830px) and (max-width: 1100px){
      padding: 16px 10px;
    }

    @media(max-width: 390px){
      padding: 15px 9px;
    }
  }

  .addToCart{
    background-color: #141110;
    padding: 20px 12px;

    @media(min-width: 830px) and (max-width: 1100px){
      padding: 16px 9px;
    }

    @media(max-width: 390px){
      padding: 15px 8px;
    }
  }
`;
