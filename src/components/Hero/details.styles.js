import { css } from '@creditas/stylitas'

export default css`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  font-size: 14px;
  padding: 0 0.5em;

  @media(min-width: 600px) {
    font-size: 16px;
  }

  @media(min-width: 1000px) {
    font-size: 20px;
  }

  h3 {
    margin: 0;
  }

  h4 {
    margin: 0;
    font-size: 1.125em;
    font-weight: bold;
  }
`