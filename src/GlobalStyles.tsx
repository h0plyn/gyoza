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
    padding: 5rem;
    font-family: var(--sans-serif), sans-serif;
  }

  #layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
  }

  a {
    text-decoration: none;
    color: var(--highlight);
  }

  a:hover {
    text-decoration: none;
    color: var(--tertiary);
  }

  button {
    align-self: center;
    background-color: var(--highlight);
    color: var(--button-text);
    border-radius: 4px;
    border: none;
    padding: 0.7rem;
  }

  button:hover {
    transition: background-color ease-in-out 0.3s;
    background-color: #5a40ab;
  }

  button:disabled {
    background-color: grey;
    color: lightgrey;
    opacity: 0.3;
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
