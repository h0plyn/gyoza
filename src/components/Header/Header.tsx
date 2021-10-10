import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .logo {
    font-size: 6rem;
  }

  .logo-text {
    position: relative;
    bottom: 1rem;
    font-size: 7rem;
    font-family: var(--serif), serif;
    color: #a792e4;
    text-shadow: 0 0 80px rgb(192 219 255 / 48%), 0 0 32px var(--highlight);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="logo">🥟</div>
      <div className="logo-text">gyoza</div>
    </HeaderStyles>
  );
}
