import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  height: 8vh;

  @media(max-width: 390px){
    display: flex;
    flex-direction: row;
  }
  
`;

export const ImageContainer = styled.div`
  padding: 21px 50px;
  @media(max-width: 390px){
    display: none;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  color: #333333;
  font-size: 20px;
  font-weight:lighter;
  
  @media(max-width: 390px){
    font-size: 15px;
  }
`;

export const ItemContainer = styled.div`
  height: 100%;
  padding: 18px 15px;
  display: flex;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease-in;
  &:hover{
    cursor: pointer;
    background-color: #E5E5E5;
  }

  @media(max-width: 390px){
    padding:11px 5px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 24px 36px;
  transition: background 0.2s ease-in;
  border-left: 1px solid rgba(51, 51, 51, 0.1);
  span{
    font-size: 22px;
    font-weight: normal;
    margin-left: 12px;

    @media(min-width: 830px) and (max-width: 1100px){
      font-weight: 400;
      margin-left: 5px;
    }

      
    @media(max-width: 390px){
      font-weight: 500;
      font-size: 15px;
    }
  }

  &:hover{
    cursor: pointer;
    background-color: #E5E5E5;
  }

  
  @media(max-width: 390px){
    padding: 26px 15px;
    height: 100%;
    font-weight: 500;
  }
`;
