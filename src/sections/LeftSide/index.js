import { ButtonsContainer, Container, ContentContainer } from './styles';

export default function LeftSide() {
  return (
    <Container>
      <ContentContainer>
        <h1>Nike air Zoom</h1>
        <small>Novo lançamento</small>
        <span>R$389,90</span>
        <ButtonsContainer>
          <button className="details" type="submit">Detalhes</button>
          <button className="addToCart" type="submit">Adicionar ao carrinho</button>
        </ButtonsContainer>
      </ContentContainer>
    </Container>
  );
}
