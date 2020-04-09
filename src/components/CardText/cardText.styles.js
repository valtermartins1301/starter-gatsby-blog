import { css, mq, utilities } from '@creditas/stylitas';
import tokens from '@creditas/tokens';

const containerBase = css`
  position: relative;
  display: flex;
  flex-direction: flex;
  justify-content: space-between;
  padding: 16px;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid rgb(238, 238, 238);
  z-index: 2;

  :hover {
    ${utilities.surface.hover({
    theme: { bColorsecondary05: tokens.bColorsecondary05 },
  })}
  }
  
  transition: all 0.2s;
`;

const containerHorizontal = ({ containerStyle, width, height }) => css`
  ${containerBase}
  width: ${width || 'auto'};
  height: ${height || 'auto'};
  ${containerStyle}
`;

const title = css`
  ${mq({ fontSize: ['20px', '20px', '20px', '20px', '20px'] })}
  font-weight: 600;
`;

const containerIconHorizontal = css`
  right: 0px;
  position: absolute !important;
  overflow: initial !important;
  
  height: 200px;
  width: 200px;

  opacity: 0.3;
`;

export {
  title,
  containerHorizontal,
  containerIconHorizontal,
};
