import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: #242629;
    --headline: #fffffe;
    --sub-head: #94a1b2;
    --text: #94a1b2;
    --button: #ff8906;
    --button-text: #fffffe;
    --card-bg: #16161a;
    --card-bg-alt: #25252b;
    --card-head: #fffffe;
    --card-para: #94a1b2;
    --stroke: #010101;
    --highlight: #7f5af0;
    --secondary: #72757e;
    --tertiary: #2cb67d;
    --serif: 'Josefin Sans';
    --sans-serif: 'Lato';
    --transition: ease-in-out 0.3s
    --boxShadow: 0 0 40px rgb(192 219 255 / 28%), 0 0 22px var(--highlight);
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: var(--background-color);
    color: var(--text);
    font-size: 16px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    font-family: var(--sans-serif), sans-serif;
  }

  #layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
  }

  #header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    gap: 1rem;
  }

  .logo {
    font-size: 6rem;
  }

  a {
    text-decoration: none;
    color: var(--highlight);
  }

  .logo-text {
    position: relative;
    bottom: 1rem;
    font-size: 7rem;
    font-family: var(--serif), serif;
    color: #a792e4;
    text-shadow: 0 0 80px rgb(192 219 255 / 48%), 0 0 32px var(--highlight);
  }

  .single {
    color: var(--text);
  }

  .up {
    color: seagreen;
  }
  .down {
    color: lightcoral;
  }

  /* Utils */
  .flex {
    display: flex;
  }

  .f1 {
    flex: 1;
  }

  .f2 {
    flex: 2;
  }

  .aic {
    align-items: center;
  }

  .jcc {
    justify-content: center;
  }

  .c {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
