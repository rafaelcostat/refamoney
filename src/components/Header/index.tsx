import logoImg from '../../assets/logo.svg';
import { Container, Content, Logo } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} width="45px" alt="refa money" />
          <span>refa money</span>
        </Logo>
        <button type="button" onClick={onOpenNewTransactionModal}>
          New transaction
        </button>
      </Content>
    </Container>
  );
}
