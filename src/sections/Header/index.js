import { SiNike } from 'react-icons/si';
import { FaShoppingCart } from 'react-icons/fa';
import {
  HeaderContainer, NavBar, CartContainer, ImageContainer, ItemContainer,
} from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <SiNike size={70} />
      </ImageContainer>
      <NavBar>
        <ItemContainer>
          <ul>Coleções</ul>
        </ItemContainer>
        <ItemContainer>
          <ul>Lançamentos</ul>
        </ItemContainer>
        <ItemContainer>
          <ul>Promoções</ul>
        </ItemContainer>
      </NavBar>
      <CartContainer>
        <FaShoppingCart size={20} />
        <span>Carrinho</span>
      </CartContainer>
    </HeaderContainer>
  );
}
