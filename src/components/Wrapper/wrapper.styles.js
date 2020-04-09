import { css } from "@creditas/stylitas";

export default ({ width = '60px' }) => css`
  min-width: ${width};
  margin: 0 auto;
  padding: 5vmin 0;
  position: relative;
`