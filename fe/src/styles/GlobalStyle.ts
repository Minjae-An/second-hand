import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  address,
  img,
  b,
  ol,
  ul,
  li,
  form,
  label,
  table,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  details,
  footer,
  header,
  nav,
  section,
  summary,
  mark,
  audio {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    box-sizing: border-box;
    :focus-visible{
      outline: none;
    }
  }

  article,
  aside,
  details,
  footer,
  header,
  nav,
  section {
    display: block;
  }


  body {
    width: 100%;
    font: inherit;
    font-size: 1rem;
  }

  ol,
  ul,li {
    list-style: none;
  }

  input,
  select,
  button,
  textarea {
    margin: 0;
    padding: 0;
    vertical-align: middle;
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
    outline: none;
    border-radius: 0;
    box-shadow: none;
    appearance: none;
    box-sizing: border-box;
  }

  input,
  select,
  textarea {
    display: block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    display: block;
    max-width: 100%;
    border: 0;
  }

  button {
    display: block;
    border: 0;
    outline: none;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }

  i {
    font-style: normal;
  }

  u {
    text-decoration: none;
  }

  a {
    font: inherit;
    color: inherit;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: none;
  }
`;

export default GlobalStyle;
