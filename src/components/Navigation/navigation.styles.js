import {css} from '@creditas/stylitas'

export default css`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 20vh;
    max-height: 100px;
    font-size: 1.25em;
  }

  li {
    display: inline-flex;
    align-items: center;
    margin: 0 1em;
  }

  a {
    color: currentColor;
  }
`