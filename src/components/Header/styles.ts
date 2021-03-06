import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.25s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1.25rem;
    margin-left: 1rem;
    color: #fff;
  }
`;
